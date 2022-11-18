import { Component } from '@angular/core';
import { SeoComponent } from './features/products/pages/seo/seo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  landingPage: boolean = false;
  isLanding: boolean = false;

  constructor(
    // private router: Router
  ) {
    /*
       Getting current route
       see if its a landing page or not
     */
    // this.router.events.pipe(
    //   filter((event: any) => event instanceof NavigationEnd)
    // ).subscribe(event => {
    //   if (event.url.includes('/products')) {
    //     this.landingPage = true;
    //   }
    // })
  }

  showHide(event: Component) {
    // console.log('>>>LOG>>>', event);
    if (event instanceof SeoComponent) { this.isLanding = true } else { this.isLanding = false };

  }





}
