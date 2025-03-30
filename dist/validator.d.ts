import def from 'ajv-i18n';
import Ajv2020 from 'ajv/dist/2020.js';

declare const ajv: Ajv2020;
type ValidatorCallback = (isValid: boolean, errorsText?: string) => void;
type Lang = keyof typeof def;
declare function validator(data: unknown, callback: ValidatorCallback, lang: Lang): void;

export { type Lang, type ValidatorCallback, ajv, validator as default };
