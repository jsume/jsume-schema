import Ajv2020 from 'ajv/dist/2020.js';
import def from 'ajv-i18n';

declare const ajv: Ajv2020;
type ValidatorCallback = (valid: boolean, errorsText?: string) => void;
type Lang = keyof typeof def;
declare function validator(data: unknown, callback: ValidatorCallback, lang: Lang): void;

export { ajv, validator as default };
