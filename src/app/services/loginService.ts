import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signUpRequest } from '../models/signUpRequest.model';
import { Observable } from 'rxjs';

@Injectable()
export class loginService {
  baseUrl = 'http://localhost:8080/icons';
  islogged = false;

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.islogged = true;
    localStorage.setItem('logged', this.islogged.toString());
  }

  logout() {
    this.islogged = false;
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }

  saveUser(signUpRequest: signUpRequest): Observable<any> {
    return this.http.post(this.baseUrl + '/signUp', signUpRequest);
  }
}
