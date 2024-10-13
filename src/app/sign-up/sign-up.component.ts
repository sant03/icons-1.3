import { Component } from '@angular/core';
import { loginService } from '../services/loginService';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { signUpRequest } from '../models/signUpRequest.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // initial state
      transition(':enter, :leave', [
        animate('500ms ease-in-out', style({ opacity: 1 })), // animation duration and easing
      ]),
    ]),

    trigger('slideRightToLeft', [
      state('void', style({ transform: 'translateX(100%)' })), // initial state, off-screen to the right
      transition(':enter, :leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' })), // move to the initial position
      ]),
    ]),
  ],
})
export class SignUpComponent {
  constructor(private loginService: loginService, private router: Router) {}

  formSignUp: FormGroup = new FormGroup({
    dna: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  saveUser() {
    if (this.formSignUp.valid) {
      let user: signUpRequest = {
        dna: this.formSignUp.get('dna')?.value,
        name: this.formSignUp.get('name')?.value,
        lastname: this.formSignUp.get('name')?.value,
        birthDate: this.formSignUp.get('birthDate')?.value,
        email: this.formSignUp.get('email')?.value,
        password: this.formSignUp.get('password')?.value,
        phone: this.formSignUp.get('phone')?.value,
      };
      console.log('Es valido' + user);
      let body = this.formSignUp.value;
      this.loginService.saveUser(user).subscribe((response) => {
        if (response) {
          console.log(response);
          localStorage.setItem('user', response);
          this.router.navigate(['/home']);
        }
      });
    } else {
      console.log('no es valido');
      this.formSignUp.markAllAsTouched();
    }
  }
}
