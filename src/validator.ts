import addFormats from 'ajv-formats'
import localize from 'ajv-i18n'
import Ajv2020 from 'ajv/dist/2020.js'
import type def from 'ajv-i18n'

// schema
import schema from '@s/schema.json'
import configSchema from '@s/config.schema.json'
import dataSchema from '@s/data.schema.json'
import aboutSchema from '@s/data/about.schema.json'
import awardsSchema from '@s/data/awards.schema.json'
import educationSchema from '@s/data/education.schema.json'
import languagesSchema from '@s/data/languages.schema.json'
import projectsSchema from '@s/data/projects.schema.json'
import skillsSchema from '@s/data/skills.schema.json'
import workSchema from '@s/data/work.schema.json'
import definitions from '@s/definitions.json'

// custom formats
import customFormats from './customFormats'

export const ajv = new Ajv2020({
  schemas: [
    schema,
    definitions,
    configSchema,
    dataSchema,
    aboutSchema,
    workSchema,
    projectsSchema,
    educationSchema,
    awardsSchema,
    skillsSchema,
    languagesSchema,
  ],
})
addFormats(ajv)
ajv.addFormat('url', customFormats.url)
  .addFormat('githubUrl', customFormats.githubUrl)

const validate = ajv.compile(schema)

type ValidatorCallback = (valid: boolean, errorsText?: string) => void
type Lang = keyof typeof def
function validator(data: unknown, callback: ValidatorCallback, lang: Lang): void {
  const valid = validate(data)

  if (!valid) {
    const localizedErrors = localize[lang](validate.errors)
    const localizedErrorsText = ajv.errorsText(validate.errors, { separator: '\n' })
    callback(false, localizedErrorsText)
    return
  }
  callback(true)
}

export default validator
