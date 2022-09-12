import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitService {

  private NODE_BASE_URL = environment.nodeBaseUrl;
  constructor(private http: HttpClient) { }

  getTweets(url: string) {
    return this.http.get(`https://node.widesign.co.uk:80${url}`);
    // return this.http.get(`${this.NODE_BASE_URL}${url}`);

  }
}
