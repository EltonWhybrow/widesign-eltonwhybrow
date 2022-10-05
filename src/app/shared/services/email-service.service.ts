import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IEmail } from '../models/emails-interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private NODE_BASE_URL = environment.nodeBaseUrl;

  sendEmail(url: string, data: IEmail) {
    return this.http.post(`${this.NODE_BASE_URL}${url}`, data)

  }
}
