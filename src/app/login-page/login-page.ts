import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthActions} from '../store/auth/auth.actions';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage implements OnInit{

  public username!: string;
  public password!: string;

  public constructor(
    private readonly authService: AuthService,
    private readonly store: Store
  ) {}

  loginFormGroup = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(): void {
  }

  login(): void {
    const formValue = this.loginFormGroup.getRawValue();
    this.store.dispatch(
      AuthActions.login({ username: formValue.username, password: formValue.password })
    );
  }
}
