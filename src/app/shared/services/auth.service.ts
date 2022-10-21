import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ILoginStatus } from '../models/login-interface';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  private loggedInStatus: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false')
  private NODE_BASE_URL = environment.nodeBaseUrl;
  public nickname: string = (localStorage.getItem('nickname') || 'Anonymous');
  public currentRole: string = '';

  public setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true')
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || 'false' || this.loggedInStatus.toString())
  }

  public login(url: string, data: {}) {
    return this.http.post<ILoginStatus>(`${this.NODE_BASE_URL}${url}`, data);
  }

  public logout() {
    this.setLoggedIn(false);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('nickname');
    this.cookieService.delete('wsat');
    // this.router.navigate(['/'])
  }

  public getUserRole(): any {
    if (this.cookieService.get('wsat')) {
      const token = this.cookieService.get('wsat')
      const decodedToken = helper.decodeToken(token)
      return decodedToken.role
    }
    return console.log('>>> Get user role : failed >>>');

  }

  // public setUserRoles(role: string): void {
  //   this.role = role
  // }

}
