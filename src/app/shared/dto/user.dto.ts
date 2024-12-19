import type { UserType } from '../enums/user-type.enum';

export interface UserDto {
  username: string;
  email: string;
  type: UserType;
  password: string;
}
