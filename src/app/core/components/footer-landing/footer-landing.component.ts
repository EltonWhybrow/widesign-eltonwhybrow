import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-footer-landing',
  templateUrl: './footer-landing.component.html',
  styleUrls: ['./footer-landing.component.scss']
})
export class FooterLandingComponent {
  year: number = new Date().getFullYear()

  constructor(public authService: AuthService) { }

}
