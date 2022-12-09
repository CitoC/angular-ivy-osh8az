import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  // Views
  data: string = 'Hello World!';

  // Change Detection
  names: string[] = ['Jesse', 'Lexi', 'Ethan'];

  newName: string = '';

  add() {
    this.names.push(this.newName);
    console.log(this.names);
  }
}
