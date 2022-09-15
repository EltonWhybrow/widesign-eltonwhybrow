import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstaService {

  private NODE_BASE_URL = environment.nodeBaseUrl;
  constructor(private http: HttpClient) { }

  getInstaFeed(url: string) {
    return this.http.get(`${this.NODE_BASE_URL}${url}`).pipe(
      // tap(timeline => console.log("timeline in Service: ", timeline)),
      catchError(this.handleError<any>())
    )
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
