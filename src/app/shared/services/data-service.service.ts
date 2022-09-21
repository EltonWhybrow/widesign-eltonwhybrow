import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { catchError, tap, map, delay, scan, takeWhile } from 'rxjs/operators';
import { IServices } from 'src/app/shared/models/service-interface';
import { IClientsInfo } from 'src/app/shared/models/clients-interface';
import { ITestmonial } from '../models/testimonials-interface';
import { IFaq } from '../models/faq-interface';
import { IPortfolio } from '../models/portfolio-interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<IServices[]> {
    return this.http.get<IServices[]>('../../assets/data/ws-services.json').pipe(
      // TODO: temp deay to check resolve
      // delay(2000),
      // tap(services => console.log("services: " + JSON.stringify(services))),
      catchError(this.handleError<IServices[]>([]))
    );
  }

  getPortfolioInfo(): Observable<IPortfolio[]> {
    return this.http.get<IServices[]>('../../assets/data/ws-portfolio.json').pipe(
      // TODO: temp deay to check resolve
      // delay(2000),
      // tap(services => console.log("services: " + JSON.stringify(services))),
      catchError(this.handleError<IPortfolio[]>([]))
    );
  }

  getClientsInfo(): Observable<IClientsInfo[]> {
    return this.http.get<IClientsInfo[]>('../../assets/data/ws-clients-info.json').pipe(
      // TODO: temp deay to check resolve
      // delay(2000),
      // tap(services => console.log("services: " + JSON.stringify(services))),
      catchError(this.handleError<IClientsInfo[]>([]))
    );
  }

  getOneTestimonial(id: number): Observable<ITestmonial> {
    return this.http.get<any>('../../assets/data/ws-testimonials.json').pipe(
      // map(testmonial => testmonial[0]),
      map(testmonial => testmonial[id]),
      // tap(testmonial => console.log("One Testimonial: " + JSON.stringify(testmonial))),
      catchError(this.handleError<ITestmonial>())
    );
  }

  getTestimonials(): Observable<ITestmonial[]> {
    return this.http.get<ITestmonial[]>('../../assets/data/ws-testimonials.json').pipe(
      // tap(testmonial => console.log("Testimonials: " + JSON.stringify(testmonial))),
      catchError(this.handleError<ITestmonial[]>([]))
    );
  }

  getFaqs(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>('../../assets/data/ws-faqs.json').pipe(
      // tap(faqs => console.log("faqs: " + JSON.stringify(faqs))),
      catchError(this.handleError<IFaq[]>([]))
    );
  }

  getJobQuestions(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>('../../assets/data/ws-questions-job.json').pipe(
      // tap(faqs => console.log("faqs: " + JSON.stringify(faqs))),
      catchError(this.handleError<IFaq[]>([]))
    );
  }

  getRevisionQuestions(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>('../../assets/data/ws-questions-revision.json').pipe(
      // tap(faqs => console.log("faqs: " + JSON.stringify(faqs))),
      catchError(this.handleError<IFaq[]>([]))
    );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }


}
