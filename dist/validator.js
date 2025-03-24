import { customFormats_default } from './chunk-SQD2FGSZ.js';
import { schema_default, definitions_default, config_schema_default, data_schema_default, about_schema_default, work_schema_default, projects_schema_default, education_schema_default, awards_schema_default, skills_schema_default, languages_schema_default } from './chunk-L7PMX42Q.js';
import addFormats from 'ajv-formats';
import localize from 'ajv-i18n';
import Ajv2020 from 'ajv/dist/2020.js';

var ajv = new Ajv2020({
  schemas: [
    schema_default,
    definitions_default,
    config_schema_default,
    data_schema_default,
    about_schema_default,
    work_schema_default,
    projects_schema_default,
    education_schema_default,
    awards_schema_default,
    skills_schema_default,
    languages_schema_default
  ]
});
addFormats(ajv);
ajv.addFormat("url", customFormats_default.url).addFormat("githubUrl", customFormats_default.githubUrl);
var validate = ajv.compile(schema_default);
function validator(data, callback, lang) {
  const valid = validate(data);
  if (!valid) {
    localize[lang](validate.errors);
    const localizedErrorsText = ajv.errorsText(validate.errors, { separator: "\n" });
    callback(false, localizedErrorsText);
    return;
  }
  callback(true);
}
var validator_default = validator;

export { ajv, validator_default as default };
