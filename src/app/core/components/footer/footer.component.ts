import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TwitService } from 'src/app/shared/services/twit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear()
  twitterFeed: any;

  constructor(public authService: AuthService, private twitService: TwitService) { }

  ngOnInit(): void {
    this.twitService.getTweets('/tweets/get').subscribe(
      (data: any) => {
        const res: any = data;
        this.twitterFeed = res;
        console.log(this.twitterFeed);
      },
      (err: any) => {
        console.log('There has been a error sending twit info >>>>>>>>>>>>>>>>>', err);

      }, () => {
        /* istanbul ignore next */
        console.log('complete');
      }
    );
  }

  public logout() {
    this.authService.logout();
  }
}
