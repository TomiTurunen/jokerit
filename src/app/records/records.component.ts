import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
    selector: 'pm-records',
    templateUrl: './records.component.html'
})

export class RecordsComponent {
    pageTitle: string = 'Tulokset';
    errorMessage: string;
    events: any[] = [];
    events2: any[] = [
        {
            "event": {
                "game_state_key": "not_yet_started",
                "period": null,
                "hd": true,
                "id": 983705,
                "stage_id": 157,
                "type_id": 24,
                "commentator": false,
                "cola_company": null,
                "team_a": {
                    "id": 16,
                    "image": "https://rec-2-10.webcaster.pro/fc/sdc/team_pics/16/original/cska.png",
                    "name": "CSKA",
                    "location": "Moscow"
                },
                "team_b": {
                    "id": 113,
                    "image": "https://m9-proxy.webcaster.pro/rec-3-14.webcaster.pro/fc/sdd/team_pics/113/original/sochi.png",
                    "name": "HC Sochi",
                    "location": "Sochi"
                },
                "name": "CSKA - HC Sochi",
                "tickets": null,
                "location": "Moscow",
                "start_at_day": 1582750800,
                "start_at": 1582821000000,
                "event_start_at": 1582820400000,
                "end_at": 1582831500000,
                "not_regular": false,
                "score": "0:0",
                "scores": {
                    "first_period": null,
                    "second_period": null,
                    "third_period": null,
                    "overtime": null,
                    "bullitt": null
                },
                "sscore": null,
                "image": "https://video.khl.ru/images/khl/new/types/live_2016_big.jpg",
                "m3u8_url": null
            }
        },
        {
            "event": {
                "game_state_key": "not_yet_started",
                "period": null,
                "hd": true,
                "id": 983701,
                "stage_id": 157,
                "type_id": 24,
                "commentator": false,
                "cola_company": null,
                "team_a": {
                    "id": 34,
                    "image": "https://m9-proxy.webcaster.pro/rec-3-16.webcaster.pro/fc/sdd/team_pics/34/original/vityaz.png",
                    "name": "Vityaz",
                    "location": "Moscow Region"
                },
                "team_b": {
                    "id": 26,
                    "image": "https://rec-2-13.webcaster.pro/fc/sdd/team_pics/26/original/Lokomotiv-(obvodka).png",
                    "name": "Lokomotiv",
                    "location": "Yaroslavl"
                },
                "name": "Vityaz - Lokomotiv",
                "tickets": null,
                "location": "Podolsk",
                "start_at_day": 1582750800,
                "start_at": 1582821000000,
                "event_start_at": 1582820400000,
                "end_at": 1582831500000,
                "not_regular": false,
                "score": "0:0",
                "scores": {
                    "first_period": null,
                    "second_period": null,
                    "third_period": null,
                    "overtime": null,
                    "bullitt": null
                },
                "sscore": null,
                "image": "https://video.khl.ru/images/khl/new/types/live_2016_big.jpg",
                "m3u8_url": null
            }
        },
        {
            "event": {
                "game_state_key": "not_yet_started",
                "period": null,
                "hd": true,
                "id": 983697,
                "stage_id": 157,
                "type_id": 24,
                "commentator": false,
                "cola_company": null,
                "team_a": {
                    "id": 10,
                    "image": "https://rec-2-10.webcaster.pro/fc/sdc/team_pics/10/original/ava2.png",
                    "name": "Avangard",
                    "location": "Omsk Region"
                },
                "team_b": {
                    "id": 109,
                    "image": "https://rec-1-2.webcaster.pro/fc/sdc/team_pics/109/original/Jokerit_2019.png",
                    "name": "Jokerit",
                    "location": "Helsinki"
                },
                "name": "Avangard - Jokerit",
                "tickets": "https://tickets.championat.com/khl/48274473/?utm_campaign=khlru",
                "location": "Balashikha",
                "start_at_day": 1582750800,
                "start_at": 1582821000000,
                "event_start_at": 1582820400000,
                "end_at": 1582831500000,
                "not_regular": false,
                "score": "0:0",
                "scores": {
                    "first_period": null,
                    "second_period": null,
                    "third_period": null,
                    "overtime": null,
                    "bullitt": null
                },
                "sscore": null,
                "image": "https://video.khl.ru/images/khl/new/types/live_2016_big.jpg",
                "m3u8_url": null
            }
        }, {
            "event": {
                "game_state_key": "not_yet_started",
                "period": null,
                "hd": true,
                "id": 983657,
                "stage_id": 157,
                "type_id": 24,
                "commentator": false,
                "cola_company": null,
                "team_a": {
                    "id": 22,
                    "image": "https://rec-1-4.webcaster.pro/fc/sda/team_pics/22/original/Torpedo_2018-1.png",
                    "name": "Torpedo",
                    "location": "Nizhny Novgorod"
                },
                "team_b": {
                    "id": 109,
                    "image": "https://rec-1-2.webcaster.pro/fc/sdc/team_pics/109/original/Jokerit_2019.png",
                    "name": "Jokerit",
                    "location": "Helsinki"
                },
                "name": "Torpedo - Jokerit",
                "tickets": null,
                "location": "Nizhny Novgorod",
                "start_at_day": 1582578000,
                "start_at": 1582646400000,
                "event_start_at": 1582645800000,
                "end_at": 1582656900000,
                "not_regular": false,
                "score": "0:0",
                "scores": {
                    "first_period": null,
                    "second_period": null,
                    "third_period": null,
                    "overtime": null,
                    "bullitt": null
                },
                "sscore": null,
                "image": "https://video.khl.ru/images/khl/new/types/live_2016_big.jpg",
                "m3u8_url": null
            }
        }
    ];

    constructor(private recordsService: RecordsService) { }

    ngOnInit(): void {
        this.recordsService.getProducts().subscribe({
            next: events => {
                this.events = events
            },
            error: err => this.errorMessage = err

        })
    }

}