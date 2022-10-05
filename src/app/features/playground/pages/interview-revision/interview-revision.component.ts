import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { IFaq } from 'src/app/shared/models/faq-interface';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-interview-revision',
  templateUrl: './interview-revision.component.html',
  styleUrls: ['./interview-revision.component.scss']
})
export class InterviewRevisionComponent implements OnInit {
  allJobQuestions: IFaq[] = [];
  allRevisionQuestions: IFaq[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    //Get all questions
    let job = this.httpService.getJobQuestions()
    let revision = this.httpService.getRevisionQuestions()

    forkJoin([job, revision]).subscribe((results: any) => {
      this.allJobQuestions = results[0];
      this.allRevisionQuestions = results[1];
    }),
      (error: any) => console.log(error)
    // () => console.log('all questions in forkJoin component')
  }
}


