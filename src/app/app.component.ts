import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  template: `
  <nav class='navbar navbar-axpand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Etusivu</a></li>
      <li><a class='nav-link' [routerLink] = "['/all']">KHL-tulokset</a></li>
      <li><a class='nav-link' [routerLink] = "['/jokerit']">Jokerit-tulokset</a></li>
      <li><a class='nav-link' [routerLink] = "['/jokerit_players']">Jokerit-parhaat pelaajat</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
  title = 'hockey';
}
