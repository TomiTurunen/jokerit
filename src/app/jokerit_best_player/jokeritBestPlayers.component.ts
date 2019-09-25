import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { Scores } from '../models/scores';

@Component({
    selector: 'pm-records',
    templateUrl: './jokeritBestPlayers.component.html'
})

export class JokeritBestPlayersComponent {
    pageTitle: string = 'Jokerit pelaajat 2019-2020';
    errorMessage: string;
}