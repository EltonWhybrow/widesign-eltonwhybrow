import { Component, OnInit } from '@angular/core';
import { IClients, IClientsInfo } from 'src/app/shared/models/clients-interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.scss']
})
export class ClientAreaComponent implements OnInit {
  allClientInfo: IClientsInfo[] | undefined;
  privateInfo: [] | undefined;
  ;
  constructor(public httpService: HttpService, public authService: AuthService) { }

  // private loogedInInfo() {
  //   let newArray: any = []
  //   this.allClientInfo?.forEach(x => {
  //     if (x.private) {
  //       newArray.push(x);
  //     }
  //   },
  //     this.privateInfo = newArray)
  //   console.log('>>>LOG>>>', this.privateInfo);
  // }

  private getServicesData() {
    this.httpService.getClientsInfo()
      .subscribe(
        (data: IClientsInfo[]) => {
          this.allClientInfo = data
          // this.loogedInInfo();
        },
        (error: any) => console.log(error),
        // () => console.log('completed')
      );
  }

  ngOnInit(): void {
    this.getServicesData()

  }

}
