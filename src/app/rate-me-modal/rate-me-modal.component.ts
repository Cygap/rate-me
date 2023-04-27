import { Component } from '@angular/core';
import { RatingPoint, points } from '../rating';
@Component({
  selector: 'app-rate-me-modal',
  templateUrl: './rate-me-modal.component.html',
  styleUrls: ['./rate-me-modal.component.css'],
})
export class RateMeModalComponent {
  points = points;
  onItemSelected(item: RatingPoint) {
    if (item.selected) {
      this.points
        .filter((point) => point.id !== item.id)
        .forEach((point) => (point.selected = false));
    }
  }
}
