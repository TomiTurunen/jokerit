import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { Scores } from '../models/scores';

@Component({
    selector: 'pm-records',
    templateUrl: './jokeritBestPlayers.component.html'
})

export class JokeritBestPlayersComponent {
    pageTitle: string = 'Jokerit pelaajat 2019-2020';
    JOKERIT_ID: number = 109;
    errorMessage: string;
    imageWidth = 50;
    flagWidth = 40;
    imageMargin = 2;
    scores: any[] = [];
    //Todo try get id:s automatically
    jokeritPlayerIds: any[]

    constructor(private recordsService: RecordsService) { }

    async ngOnInit(): Promise<void> {
        this.getOnePage();
        console.log(4);
    }
    getOnePage(): void {
        this.recordsService.getScores().subscribe({
            next: player => {
                console.log(player);
                this.scores = player;
            },
            error: err => this.errorMessage = err
        })
    }

}