import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
    selector: 'pm-records',
    templateUrl: '../records.component.html'
})

export class JokeritResultsComponent {
    pageTitle: string = 'Jokereiden pelit 2019-2020';
    MAX_PAGE_NUMBER: number = 65;
    JOKERIT_ID: number = 109;
    //TODO Käännä tulokset ympäri
    errorMessage: string;
    events: any[] = [];

    constructor(private recordsService: RecordsService) { }

    ngOnInit(): void {
        for (let i = this.MAX_PAGE_NUMBER; i > 0; i--) {
            this.getOnePage(i);
        }
    }
    getOnePage(num): void {
        this.recordsService.getProducts(num).subscribe({
            next: events => {
                let temp_events: any[] = events.filter(event => {
                    return event.event.team_a.id == this.JOKERIT_ID ||
                        event.event.team_b.id == this.JOKERIT_ID;
                })
                this.events = this.events.concat(temp_events.reverse());
                this.events.sort((a, b) => a.event.start_at_day.toString().localeCompare(b.event.start_at_day.toString()));
                console.log(temp_events.reverse())

            },
            error: err => this.errorMessage = err
        })
    }

}