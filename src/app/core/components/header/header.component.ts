import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public currentRoute: string = '/';

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.currentRoute = event.url;
    })
  }

  public logout() {
    this.authService.setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  }




}
