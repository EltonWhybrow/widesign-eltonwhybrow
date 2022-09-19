import { Component, OnInit } from '@angular/core';
import { IFaq } from 'src/app/shared/models/faq-interface';
import { HttpService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-interview-revision',
  templateUrl: './interview-revision.component.html',
  styleUrls: ['./interview-revision.component.scss']
})
export class InterviewRevisionComponent implements OnInit {
  allQuestions: IFaq[] | undefined;
  allRevisionQuestions!: IFaq[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.httpService.getJobQuestions()
      .subscribe(
        (data: IFaq[]) => this.allQuestions = data,
        (error: any) => console.log(error),
        // () => console.log('all questions in faq component', this.allQuestions)
      );

    this.httpService.getRevisionQuestions()
      .subscribe(
        (data: IFaq[]) => this.allRevisionQuestions = data,
        (error: any) => console.log(error),
        // () => console.log('all questions in faq component', this.allQuestions)
      );
  }

}
