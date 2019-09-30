import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RecordsService } from '../records.service';


@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Terveloa Jokeri tulokset sivulle. ' +
    'Tuloksiin pääset navigoimaan välilehdiltä.';
  displayCode: boolean;

  constructor(private store: Store<any>,
    private recordsService: RecordsService) { }
  //TODO unsubscribe
  ngOnInit(): void {
    this.store.pipe(select('products')).subscribe(
      products => {
        if (products) {
          this.displayCode = products.showProductCode;
        }
      }
    )
  }

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: value
    })
  }
}
