import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thank-you-modal',
  templateUrl: './thank-you-modal.component.html',
  styleUrls: ['./thank-you-modal.component.scss'],
})
export class ThankYouModalComponent {
  @Input() ratingScore!: number;
}
