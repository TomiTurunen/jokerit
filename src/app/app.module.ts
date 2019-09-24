import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { JokeritResultsComponent } from './jokerit_results/jokeritResults.component';
import { JokeritBestPlayersComponent } from './jokerit_best_player/jokeritBestPlayers.component';
import { NgbdTableSortable } from './jokerit_best_player/table_sortable';
import { NgbdTableSortableModule } from './sortable_table/table-sortable.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    WelcomeComponent,
    JokeritResultsComponent,
    JokeritBestPlayersComponent,
    //NgbdTableSortableModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbdTableSortableModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'all', component: RecordsComponent },
      { path: 'jokerit', component: JokeritResultsComponent },
      { path: 'jokerit_players', component: JokeritBestPlayersComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
