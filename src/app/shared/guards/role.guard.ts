import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }
  canActivate() {
    if (this.authService.userRole !== 'ROLE_ADMIN') {
      this.router.navigate(['login/not-authorised']);
      return false;
    } else {
      return true;
    }
  }

}

