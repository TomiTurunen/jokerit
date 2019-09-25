import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
    selector: 'pm-records',
    templateUrl: '../records.component.html'
})

export class JokeritResultsComponent {
    pageTitle: string = 'Jokereiden pelien tulokset:';
    comingTitle: string = 'Tulossa olevat pelit:'
    MAX_PAGE_NUMBER: number = 65;
    JOKERIT_ID: number = 109;
    //TODO Käännä tulokset ympäri
    errorMessage: string;
    events: any[] = [];
    comingEvents: any[] = [];

    constructor(private recordsService: RecordsService) { }

    ngOnInit(): void {
        let dateNow = new Date().setHours(0, 0, 0, 0) / 1000;
        for (let i = 1; i < this.MAX_PAGE_NUMBER; i++) {
            this.getEvents(i, dateNow);
            this.getPastEvents(i, dateNow);
        }
    }
    getEvents(num, dateNow): void {
        this.recordsService.getProducts(num).subscribe({
            next: events => {
                let temp_events: any[] = events.filter(event => {
                    return event.event.team_a.id == this.JOKERIT_ID ||
                        event.event.team_b.id == this.JOKERIT_ID;
                }).filter(event => {
                    return event.event.start_at_day <= dateNow;
                })
                this.events = this.events.concat(temp_events);
                this.events.sort((a, b) => b.event.start_at_day.toString().localeCompare(a.event.start_at_day.toString()));
            },
            error: err => this.errorMessage = err
        })
    }
    getPastEvents(num, dateNow): void {
        this.recordsService.getProducts(num).subscribe({
            next: events => {
                let temp_events: any[] = events.filter(event => {
                    return event.event.team_a.id == this.JOKERIT_ID ||
                        event.event.team_b.id == this.JOKERIT_ID;
                }).filter(event => {
                    return event.event.start_at_day > dateNow;
                })
                this.comingEvents = this.comingEvents.concat(temp_events);
                this.comingEvents.sort((a, b) => a.event.start_at_day.toString().localeCompare(b.event.start_at_day.toString()));
            },
            error: err => this.errorMessage = err
        })
    }

}