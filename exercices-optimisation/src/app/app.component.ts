import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercice-optimisation';

  log() {
    console.log('AppComponent log');
  }

  ngDoCheck(): void {
    console.log('AppComponent checked');

  }
}
