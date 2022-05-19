import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private NODE_BASE_URL = environment.nodeBaseUrl;

  sendEmail(url: string, data: {}) {
    return this.http.post(`${this.NODE_BASE_URL}${url}`, data);

  }

}
