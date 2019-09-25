import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecordsService } from '../records.service';

import { NgbdSortableHeader, NgbdTableSortable } from './table-sortable';
import { ConvertBrokenMarks } from '../convert-broken-marks.pipe';

@NgModule({
  imports: [BrowserModule, CommonModule, NgbModule],
  declarations: [NgbdTableSortable, NgbdSortableHeader, ConvertBrokenMarks],
  exports: [NgbdTableSortable, ConvertBrokenMarks],
  bootstrap: [NgbdTableSortable]
})
export class NgbdTableSortableModule { }
