import { Component } from '@angular/core';
import { RecordsService } from './records/records.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  template: `
  <div><h1>{{pageTitle}}</h1>
        <pm-records></pm-records>
        </div>`
})
export class AppComponent {
  title = 'hockey';
}
