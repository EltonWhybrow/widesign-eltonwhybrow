import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IServices } from 'src/app/shared/models/service-interface';
import { IClients } from 'src/app/shared/models/clients-interface';
import { ITestmonial } from '../models/testimonials-interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<IServices[]> {
    return this.http.get<IServices[]>('../../assets/data/ws-services.json').pipe(
      // tap(services => console.log("services: " + JSON.stringify(services))),
      catchError(this.handleError<IServices[]>([]))
    );
  }

  getOneTestimonial(): Observable<ITestmonial[]> {
    return this.http.get<any>('../../assets/data/ws-testimonials.json').pipe(
      map(testmonial => testmonial[0]),
      tap(testmonial => console.log("Testimonial: " + JSON.stringify(testmonial[0]))),
      catchError(this.handleError<ITestmonial[]>([]))
    );
  }

  getTestimonials(): Observable<ITestmonial[]> {
    return this.http.get<ITestmonial[]>('../../assets/data/ws-testimonials.json').pipe(
      tap(testmonial => console.log("Testimonial: " + JSON.stringify(testmonial))),
      catchError(this.handleError<ITestmonial[]>([]))
    );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }

}
