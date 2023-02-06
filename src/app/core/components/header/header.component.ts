import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  burgerActive: boolean = false;
  public currentRoute: string = '';
  randomPic: number = 2;

  constructor(private router: Router) {
    /*
      Getting current route to display items based on / route
    */
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.currentRoute = event.url;
    })
  }

  ngOnInit(): void {
    this.randomPic = this.get_random([2, 3, 4])
  }

  private get_random(list: number[]) {
    return list[Math.floor((Math.random() * list.length))];
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
