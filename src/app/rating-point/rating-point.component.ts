import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RatingPoint } from '../rating';

@Component({
  selector: 'app-rating-point',
  templateUrl: './rating-point.component.html',
  styleUrls: ['./rating-point.component.scss'],
})
export class RatingPointComponent {
  @Input() rating!: RatingPoint;
}
