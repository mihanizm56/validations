import { ISimpleValidator } from '@/types/simple-validators';
import { validationErrors } from '@/constants';

export class SimpleValidator extends ISimpleValidator {
  minLenghtValidate = (numberOfChars: number) => (value?: string) =>
    value && value.length && value.length < numberOfChars
      ? { error: true, errorTextValue: validationErrors.minLenght }
      : { error: false, errorTextValue: '' };

  maxLenghtValidate = (numberOfChars: number) => (value?: string) =>
    value && value.length && value.length > numberOfChars
      ? { error: true, errorTextValue: validationErrors.maxLenght }
      : { error: false, errorTextValue: '' };

  requiredValidator = (value?: string) => {
    if (value) {
      if (typeof value === 'string') {
        return Boolean(value.trim())
          ? { error: false, errorTextValue: '' }
          : { error: true, errorTextValue: validationErrors.required };
      }

      return { error: false, errorTextValue: '' };
    }

    return { error: true, errorTextValue: validationErrors.required };
  };
}
