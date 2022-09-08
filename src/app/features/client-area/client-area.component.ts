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

  constructor(public httpService: HttpService, public authService: AuthService) { }

  ngOnInit(): void {
    /*
 Getting the offered services data
 */
    this.httpService.getClientsInfo()
      .subscribe(
        (data: IClientsInfo[]) => this.allClientInfo = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

}
