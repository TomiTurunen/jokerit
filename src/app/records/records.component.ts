import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
    selector: 'pm-records',
    templateUrl: '../records.component.html'
})

export class RecordsComponent {
    pageTitle: string = 'KHL Tulokset 2019-2020';
    MAX_PAGE_NUMBER: number = 65;
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
                this.events = this.events.concat(events.reverse());
                this.events.sort((a, b) => a.event.start_at_day.toString().localeCompare(b.event.start_at_day.toString()));
            },
            error: err => this.errorMessage = err
        })
    }

}