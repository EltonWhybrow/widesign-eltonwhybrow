import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: number = new Date().getFullYear()
  twitterFeed: any;
  instaFeed: any;

  constructor() { }
}
