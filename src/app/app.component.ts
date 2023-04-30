import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rate-me';
  itemID = 0;
  handleSubmit(itemID: number) {
    this.itemID = itemID;
  }
}
