import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

import { Event } from './models/event';
import { Scores } from './models/scores';
import { Teams } from './models/teams';

@Injectable({
    providedIn: 'root'
})
export class RecordsService {
    private baseUrl = 'https://khl.api.webcaster.pro/api/khl_mobile/';
    private eventUrl = this.baseUrl + 'events_v2.json?locale=en';
    private scoreUrl = this.baseUrl + 'players_v2.json?locale=en';
    private jokeritUrl = this.baseUrl + 'team_v2?locale=en&id=109';
    constructor(private http: HttpClient) { }

    private jokeritIds: any[] = [908, 1028, 1290, 2701, 3165, 4277, 4349, 5191,
        5207, 5311, /*8699,*/ 8711, 8727, 8731, 8735, 18925, 18929, 19173, 21865,
        21869, 21877, 25841, /*25845,*/ 25849, 25853, 25857, 25861, 25865];

    getProducts(pageNumber: number): Observable<Event[]> {
        return this.getOnePage(pageNumber);
    }

    getOnePage(pageNumber: number): Observable<Event[]> {
        return this.http.get<Event[]>(this.eventUrl + '&page=' + pageNumber).pipe(
            catchError(this.handleError)
        );
    }
    getScores(): Observable<Scores[]> {
        this.jokeritIds.forEach(function (player) {
            this.scoreUrl = this.scoreUrl + '&q[id_in][]=' + player
        }.bind(this));
        // jokeritIds.values();
        console.log(this.scoreUrl)
        return this.http.get<Scores[]>(this.scoreUrl).pipe(
            catchError(this.handleError)
        );
    }
    getJokerit(): Observable<Teams[]> {
        return this.http.get<Teams[]>(this.jokeritUrl).pipe(
            catchError(this.handleError)
        );
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