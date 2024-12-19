import { RouterModule, type Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutesEnum } from './shared/enums/auth-routes.enum';
import { NgModule } from '@angular/core';

export const AUTH_ROUTES: Routes = [
  {
    path: AuthRoutesEnum.HOME,
    redirectTo: AuthRoutesEnum.REG,
    pathMatch: 'full',
  },
  {
    path: AuthRoutesEnum.REG,
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
