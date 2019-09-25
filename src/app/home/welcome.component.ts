import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Terveloa Jokeri tulokset sivulle. ' +
    'Tuloksiin pääset navigoimaan välilehdiltä.';
}
