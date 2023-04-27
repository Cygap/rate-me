import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RateMeModalComponent } from './rate-me-modal/rate-me-modal.component';
import { ThankYouModalComponent } from './thank-you-modal/thank-you-modal.component';
import { RatingPointComponent } from './rating-point/rating-point.component';

@NgModule({
  declarations: [
    AppComponent,
    RateMeModalComponent,
    ThankYouModalComponent,
    RatingPointComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
