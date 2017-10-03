import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    AboutUsComponent,
    SpeakersComponent,
    NewsletterFormComponent,
    MainBannerComponent,
    MainPageComponent
  ],
  imports: [
    MdButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
