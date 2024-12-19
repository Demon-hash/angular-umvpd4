import type { UserDto } from '@dto/user.dto';

export const AUTH_FORM_FIELDS = {
  USERNAME: 'username',
  EMAIL: 'email',
  PASSWORD: 'password',
  TYPE: 'type',
} satisfies Record<Uppercase<keyof UserDto>, keyof UserDto>;
