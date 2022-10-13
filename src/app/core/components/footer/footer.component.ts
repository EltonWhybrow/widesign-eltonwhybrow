import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { InstaService } from 'src/app/shared/services/insta-service.service';
import { TwitService } from 'src/app/shared/services/twit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear()
  twitterFeed: any;
  instaFeed: any;

  constructor(public authService: AuthService, private twitService: TwitService, private instaService: InstaService) { }

  ngOnInit(): void {
    this.twitService.getTweets('/tweets/get').subscribe(
      (data: any) => {
        const res: any = data;
        this.twitterFeed = res;
        // console.log(this.twitterFeed);
      },
      (err: any) => {
        this.twitterFeed = false;
        // console.log('There has been a error getting twits >>>', err);

      }, () => {
        /* istanbul ignore next */
        // console.log('complete');
      }
    );

    this.instaService.getInstaFeed('/instafeed/get').subscribe(
      (data: any) => {
        const res: any = data;
        this.instaFeed = res.slice(0, 12);
        // console.log(this.instaFeed);
      },
      (err: any) => {
        this.instaFeed = false;
        // console.log('There has been a error getting insta timeline >>>', err);

      }, () => {
        /* istanbul ignore next */
        // console.log('complete');
      }
    );
  }

  public logout() {
    this.authService.logout();
  }
}
