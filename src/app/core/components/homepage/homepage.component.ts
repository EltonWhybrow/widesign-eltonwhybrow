import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  totalAngularPackages: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    // const loggedIn: any = new BehaviorSubject(true);

    // const loggedIn$ = loggedIn.asObservable();

    // loggedIn$.subscribe((val: any) => console.log('early sub:' + val));

    // loggedIn.next(false)
    // loggedIn.next(true)
    // loggedIn.next(false)

    // setTimeout(() => {

    //   loggedIn$.subscribe((val: any) => console.log('late sub:' + val));

    // }, 3000);
    ;
  }
}
