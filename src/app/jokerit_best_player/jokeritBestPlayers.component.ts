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
        let jokeritIds: any[] = this.findPlayers();
        this.getOnePage(jokeritIds);
        console.log(4);
    }
    findPlayers(): any[] {
        console.log(1)
        let jokeritIds: any[] = [908, 1028, 1290, 2701, 3165, 4277, 4349, 5191,
            5207, 5311, 8699, 8711, 8727, 8731, 8735, 18925, 18929, 19173, 21865,
            21869, 21877, 25841, 25845, 25849, 25853, 25857, 25861, 25865];
        //TODO get sync work in get automatically.
        this.recordsService.getJokerit().subscribe({
            next: teams => {
                console.log(2)
                teams.team.players.forEach(player => {
                    jokeritIds.push(player.id);
                });
            },
            error: err => this.errorMessage = err
        })
        console.log(jokeritIds);
        return jokeritIds;

    }
    getOnePage(jokeritIds): void {
        this.recordsService.getScores(jokeritIds).subscribe({
            next: player => {
                console.log(player);
                this.scores = player;
            },
            error: err => this.errorMessage = err
        })
    }

}