import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { RecordsService } from '../records.service';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;


export interface SortEvent {
  column: string;
  direction: SortDirection;
  isGoaltender: Boolean;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Input() isGoaltender: boolean;
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction, isGoaltender: this.isGoaltender });
  }
}

@Component({
  selector: 'ngbd-table-sortable',
  templateUrl: './table-sortable.html'
})
export class NgbdTableSortable {
  JOKERIT_ID: number = 109;
  errorMessage: string;
  imageWidth = 50;
  flagWidth = 40;
  imageMargin = 2;
  scores: any[] = [];
  scoreStorage: any[] = [];
  gt_scores: any[] = [];
  gt_scoreStorage: any[] = [];
  fieldPlayers: string = 'Kenttäpelaajat';
  goaltenders: string = 'Maalivahdit';
  //Todo try get id:s automatically
  private jokeritIds: any[] = []
  private jokeritIds_1: any[] = [908, 1028, 1290, 2701, 3165, 4277, 4349, 5191,
    5207, 5311, 8711, 8727, 8731, 8735];
  private jokeritIds_2: any[] = [18925, 18929, 19173, 21865,
    21869, 21877, 25841, 25849, 25853, 25857, 25861, 25865, 28133];
  private jokeritIds_goaltenders: any[] = [8699, 25845];
  constructor(private recordsService: RecordsService) { }

  async ngOnInit(): Promise<void> {
    this.getJokeritPlayers();
    this.getOnePage(this.jokeritIds_1, false);
    this.getOnePage(this.jokeritIds_2, false);
    this.getOnePage(this.jokeritIds_goaltenders, true);
  }

  getJokeritPlayers(): void {
    this.recordsService.getJokerit().subscribe({
      next: jokerit => {
        jokerit.team.players.forEach(player => {
          this.jokeritIds.push(player.id);
        })
      },
      error: err => this.errorMessage = err
    })
    console.log(this.jokeritIds);
  }
  getOnePage(idsList, isGoaltender): void {
    this.recordsService.getScores(idsList).subscribe({
      next: player => {
        console.log(player);
        isGoaltender ? this.gt_scores = player.concat(this.gt_scores) : this.scores = player.concat(this.scores);
        isGoaltender ? this.gt_scoreStorage = player.concat(this.gt_scoreStorage) : this.scoreStorage = player.concat(this.scoreStorage);
      },
      error: err => this.errorMessage = err
    })
  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction, isGoaltender }: SortEvent) {
    console.log(column, direction)
    let scores = isGoaltender ? this.gt_scores : this.scores;
    let scoreStorage = isGoaltender ? this.gt_scoreStorage : this.scoreStorage;
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting players
    if (direction === '') {
      isGoaltender ? this.gt_scores = this.gt_scoreStorage : this.scores = this.scoreStorage;
    } else if (column.includes('stats')) {
      console.log(column.split("_")[1])
      let sortingString: string = column.split("-")[1];
      scores = [...scoreStorage].sort((a, b) => {
        const aValue = (a.player.stats.find(s => s.id === sortingString)).val;
        const bValue = (b.player.stats.find(s => s.id === sortingString)).val;
        const res = compare(aValue, bValue);
        return direction === 'asc' ? res : -res;
      });
    }
    else {
      scores = [...scoreStorage].sort((a, b) => {
        const res = compare(a.player[column], b.player[column]);
        return direction === 'asc' ? res : -res;
      });
    }
    isGoaltender ? this.gt_scores = scores : this.scores = scores;
  }

}
