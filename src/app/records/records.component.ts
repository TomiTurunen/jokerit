import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
    selector: 'pm-records',
    templateUrl: './records.component.html'
})

export class RecordsComponent {
    pageTitle: string = 'KHL Tulokset 2019-2020';
    //TODO Käännä tulokset ympäri
    errorMessage: string;
    events: any[] = [];

    constructor(private recordsService: RecordsService) { }

    ngOnInit(): void {
        let num: number = 1;
        this.getOnePage(num);
    }
    getOnePage(num): void {
        this.recordsService.getProducts(num).subscribe({
            next: events => {
                this.events = this.events.concat(events);
                console.log(events.length == 0);
                if (events.length > 0) {
                    this.getOnePage(num + 1);
                }
            },
            error: err => this.errorMessage = err

        })
    }

}