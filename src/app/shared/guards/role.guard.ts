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
    if (this.authService.getUserRole() !== 'ROLE_ADMIN') {
      this.authService.currentRole = 'ROLE_GUEST';
      this.router.navigate(['login/not-authorised']);
      return false;
    } else {
      return true;
    }
  }

}

