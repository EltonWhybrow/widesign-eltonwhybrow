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
  burgerActive: boolean = false;
  public currentRoute: string = '/';

  constructor(public authService: AuthService, private router: Router) {

    /*
      Getting current route to display items based on / route
    */
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.currentRoute = event.url;
    })

  }

  /*
    Toggle class on mobile burger
  */
  public toggleBurgerNav() {
    if (this.burgerActive === false) {
      this.burgerActive = true
      document.body.style.position = 'fixed';
    } else {
      this.burgerActive = false
      document.body.style.position = '';
    }
    // this.burgerActive = !this.burgerActive
  }




}
