import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoginStatus } from '../models/login-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loggedInStatus: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false')
  private NODE_BASE_URL = environment.nodeBaseUrl;

  public setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true')
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || 'false' || this.loggedInStatus.toString())
  }

  public userLogin(url: string, data: {}) {
    return this.http.post<ILoginStatus>(`${this.NODE_BASE_URL}${url}`, data);

  }

}
