import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RateMeModalComponent } from './rate-me-modal/rate-me-modal.component';
import { ThankYouModalComponent } from './thank-you-modal/thank-you-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RateMeModalComponent,
    ThankYouModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
