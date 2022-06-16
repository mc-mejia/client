import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { CreateProfile } from 'src/app/profile/model/createprofile';

const headerData = {
  headers: { 'Content-Type': 'application/json' },
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //perform dependency injection

  api = '/api/customer/';
  constructor(private httpClient: HttpClient) {}

  registerUser(customerAccount: CreateProfile): Observable<any> {
    return this.httpClient.post(this.api + 'register', customerAccount);
  }

  loginUser(login: Login): Observable<any> {
    return this.httpClient.post(this.api + 'authenticate', login);
  }

  createProfile(profile: CreateProfile): Observable<any> {
    return this.httpClient.post(this.api + 'profile', profile);
  }
}
