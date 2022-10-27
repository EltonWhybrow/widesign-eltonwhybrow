import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { IClients, IClientsInfo } from 'src/app/shared/models/clients-interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CanonicalService } from 'src/app/shared/services/canonical.service';
import { HttpService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.scss']
})
export class ClientAreaComponent implements OnInit, OnDestroy {
  allClientInfo: IClientsInfo[] | undefined;
  privateInfo: [] | undefined;
  ;
  constructor(private meta: Meta, public httpService: HttpService, public authService: AuthService, private canonical: CanonicalService) { }

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
    this.meta.updateTag({ name: 'description', content: 'Client information and dashboard at WideSign' })
    this.meta.updateTag({ name: 'image', content: './assets/meta/link-share-image.png' })
    this.meta.updateTag({ name: 'site', content: 'widesign.co.uk' })
    this.getServicesData()
    this.createLinkForCanonicalURL();
  }

  ngOnDestroy(): void {
    this.canonical.destroyLinkForCanonicalURL();
  }

  createLinkForCanonicalURL() {
    this.canonical.createLinkForCanonicalURL();
  }

}
