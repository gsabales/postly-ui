import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login-page';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class LoginPageModule {}
