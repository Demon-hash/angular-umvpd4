import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormBuilderService } from '../forms-builder/services/form-builder.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
  providers: [FormBuilderService],
  declarations: [RegistrationComponent],
})
export class AuthModule {}
