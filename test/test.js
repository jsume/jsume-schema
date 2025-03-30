/* eslint-disable antfu/no-import-dist */
/* eslint-disable no-console */
import validator from '../dist/validator.js'
import data from './jsume.json' with { type: 'json' }

function cb(isValid, errorsText) {
  if (isValid) {
    console.log('Valid')
  }
  else {
    console.log(errorsText)
  }
}

validator(
  data,
  cb,
  'en',
)
