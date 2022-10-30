import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  landingPage: boolean = false;

  constructor(private router: Router) {
    /*
       Getting current route
       see if its a landing page or not
     */
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event.url.includes('/products')) {
        this.landingPage = true;
      }
    })
  }



}
