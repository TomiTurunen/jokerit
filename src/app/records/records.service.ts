import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

import { Event } from './event';

@Injectable({
    providedIn: 'root'
})
export class RecordsService {
    private eventUrl = 'https://khl.api.webcaster.pro/api/khl_mobile/events_v2.json?locale=en'
    constructor(private http: HttpClient) { }

    getProducts(pageNumber: number): Observable<Event[]> {
        return this.getOnePage(pageNumber);
    }

    /*getOnePage(pageNumber: number): Event[] {
        return this.http.get<Event[]>(this.eventUrl + '&page=' + pageNumber);
    }*/
    getOnePage(pageNumber: number): Observable<Event[]> {
        return this.http.get<Event[]>(this.eventUrl + '&page=' + pageNumber).pipe(
            //tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProducts2(): Event[] {
        return [
            {
                "event": {
                    "name": "CSKA - HC Sochi",
                }
            },
        ];
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}