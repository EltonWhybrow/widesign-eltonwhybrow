import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private meta: Meta, public authService: AuthService) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Elton Playground for logged in fun and games' })
    this.meta.updateTag({ name: 'image', content: './assets/meta/link-share-image.png' })
    this.meta.updateTag({ name: 'site', content: 'widesign.co.uk' })
    this.authService.getUserRole();
  }

}
