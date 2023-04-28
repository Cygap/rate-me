import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { RatingPoint, points } from '../rating';
@Component({
  selector: 'app-rate-me-modal',
  templateUrl: './rate-me-modal.component.html',
  styleUrls: ['./rate-me-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RateMeModalComponent {
  points = points;
  maySubmit = false;

  @Output() ratingScore = new EventEmitter();

  onItemSelected(item: RatingPoint) {
    if (item.selected) {
      this.points
        .filter((point) => point.id !== item.id)
        .forEach((point) => (point.selected = false));
      this.maySubmit = true;
    } else {
      this.maySubmit = false;
      console.log(
        '%crate-me-modal.component.ts line:22 points',
        'color: #007acc;',
        points
      );
    }
  }

  onSubmit() {
    if (this.maySubmit) {
      const item = this.points.filter((point) => point.selected)[0];
      this.ratingScore.emit(item.id);
    }
  }
}
