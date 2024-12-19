import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { AppRoutesEnum } from './shared/enums/app-routes.enum';

export const APP_ROUTES: Routes = [
  {
    path: AppRoutesEnum.HOME,
    redirectTo: AppRoutesEnum.AUTH,
    pathMatch: 'full',
  },
  {
    path: AppRoutesEnum.AUTH,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: AppRoutesEnum.AUTH,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
