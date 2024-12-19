import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AUTH_FORM_FIELDS } from '../../shared/consts/auth-form-fields';
import { UserTypeEnum } from '../../../shared/enums/user-type.enum';
import { CustomFormFieldsValidators } from '../../../shared/validators/custom-form-fields-validators';
import { BehaviorSubject } from 'rxjs';
import type { UserDto } from '../../../shared/dto/user.dto';

@Component({
  selector: 'user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  readonly USER_TYPE = UserTypeEnum;
  readonly FIELDS = AUTH_FORM_FIELDS;

  readonly form = this._fb.group({
    [AUTH_FORM_FIELDS.USERNAME]: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(24)],
    ],
    [AUTH_FORM_FIELDS.EMAIL]: [null, [Validators.required, Validators.email]],
    [AUTH_FORM_FIELDS.TYPE]: [null, [Validators.required]],
    [AUTH_FORM_FIELDS.PASSWORD]: [
      null,
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(24),
        CustomFormFieldsValidators.upperCase(),
        CustomFormFieldsValidators.lowerCase(),
        CustomFormFieldsValidators.specialChar(),
      ],
    ],
  });

  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly _fb: FormBuilder) {}

  isInvalidFormControl(controlName: keyof UserDto) {
    if (!this.form.get(controlName).invalid) {
      return false;
    }

    return (
      this.form.get(controlName).dirty || this.form.get(controlName).touched
    );
  }

  async onSubmit() {
    if (this.isLoading$.value || this.form.invalid) {
      return;
    }

    this.isLoading$.next(true);

    try {
      await this._createUser(this.form.value);
    } catch (err) {
    } finally {
      this.isLoading$.next(false);
    }
  }

  private async _createUser(user: UserDto) {
    await new Promise((res) => setTimeout(res, 2500));

    if (Math.random() < 0.5) {
      return Promise.reject('Request Failed');
    }

    return user;
  }
}
