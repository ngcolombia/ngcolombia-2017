import { EventScheduleService } from './event-schedule/shared/event-schedule.service';
import { EventSchedule } from './event-schedule/shared/event-schedule.model';
import { SpeakerService } from './speakers/speaker.service';
import { CountdownService } from './countdown/countdown.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdDialogModule, MatTabsModule, MatSidenavModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TimeBoxComponent } from './countdown/time-box/time-box.component';
import { SpeakerDetailComponent } from './speakers/speaker-detail/speaker-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LogoComponent } from './logo/logo.component';
import { SmoothScrollDirective } from './smooth-scroll/smooth-scroll.directive';
import { VenuInformationComponent } from './venu-information/venu-information.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { PricingComponent } from './pricing/pricing.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { CommunityPartnersComponent } from './community-partners/community-partners.component';

@NgModule({
	declarations: [
		AppComponent,
		CountdownComponent,
		AboutUsComponent,
		SpeakersComponent,
		NewsletterFormComponent,
		MainBannerComponent,
		MainPageComponent,
		TimeBoxComponent,
		SpeakerDetailComponent,
		FooterComponent,
		HeaderComponent,
		NavMenuComponent,
		LogoComponent,
		SmoothScrollDirective,
		VenuInformationComponent,
		LocationMapComponent,
		PricingComponent,
		EventScheduleComponent,
		CommunityPartnersComponent
	],
	imports: [
		MdButtonModule,
		MdDialogModule,
		MatTabsModule,
		MatSidenavModule,
		MatCardModule,
		FlexLayoutModule,
		BrowserAnimationsModule,
		BrowserModule
	],
	entryComponents: [ SpeakerDetailComponent ],
	providers: [ CountdownService, SpeakerService, EventScheduleService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
