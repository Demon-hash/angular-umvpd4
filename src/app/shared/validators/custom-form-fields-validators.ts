import {
  FormControl,
  type ValidationErrors,
  type ValidatorFn,
} from '@angular/forms';

export class CustomFormFieldsValidators {
  private static _isStringValueInControl(control?: FormControl) {
    return control instanceof FormControl && typeof control?.value === 'string';
  }

  static upperCase(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      if (!this._isStringValueInControl(control)) {
        return null;
      }

      return control.value.match('^(?=.*[A-Z])') ? null : { uppercase: true };
    };
  }

  static lowerCase(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      if (!this._isStringValueInControl(control)) {
        return null;
      }

      return control.value.match('^(?=.*[a-z])') ? null : { lowercase: true };
    };
  }

  static specialChar(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      if (!this._isStringValueInControl(control)) {
        return null;
      }

      return control.value?.match('(?=.*[!@#$%^&*])')
        ? null
        : { specialchar: true };
    };
  }
}
