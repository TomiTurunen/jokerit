import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  template: `
  <nav class='navbar navbar-axpand navbar-light bg-light'>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" [routerLink]="['/welcome']" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Etusivu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink] = "['/all']" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">KHL-tulokset</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" [routerLink] = "['/jokerit']" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Jokeri-tulokset</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" [routerLink] = "['/jokerit_players']" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Jokeri-pelaajat</a>
</li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent { }
