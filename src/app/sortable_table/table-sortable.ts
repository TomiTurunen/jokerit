import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { RecordsService } from '../records.service';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [];

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
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
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
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
  //Todo try get id:s automatically
  jokeritPlayerIds: any[]
  countries = this.scores;
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
        this.scoreStorage = player;
      },
      error: err => this.errorMessage = err
    })
  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    console.log(column, direction)

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.scores = this.scoreStorage;
    } else if (column.includes('stats')) {
      console.log(column.split("_")[1])
      let sortingString: string = column.split("-")[1];
      this.scores = [...this.scoreStorage].sort((a, b) => {
        const aValue = (a.player.stats.find(s => s.id === sortingString)).val;
        const bValue = (b.player.stats.find(s => s.id === sortingString)).val;
        const res = compare(aValue, bValue);
        return direction === 'asc' ? res : -res;
      });
    }
    else {
      this.scores = [...this.scoreStorage].sort((a, b) => {
        const res = compare(a.player[column], b.player[column]);
        return direction === 'asc' ? res : -res;
      });
      console.log(this.scores)
    }
  }

}
