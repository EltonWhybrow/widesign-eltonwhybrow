import { Component, OnInit } from '@angular/core';
import { ISideProjects } from 'src/app/shared/models/sideprojects-interface';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss']
})
export class SideProjectsComponent implements OnInit {

  sideProjects: ISideProjects[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    /*
      Getting the side projects data
      */
    this.httpService.getSideProjects()
      .subscribe(
        (data: ISideProjects[]) => this.sideProjects = data,
        (error: any) => console.log(error),
        // () => console.log('completed')
      );
  }

}
