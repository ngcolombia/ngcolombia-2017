import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { FaqComponent } from './faq/faq.component';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

	selectedTab = 0;
	readonly conferenceTabIndex = 0;
	readonly workshopsTabIndex = 1;
	readonly foodTabIndex = 2;
	readonly faqTabIndex = 3;

	dialogRef: MdDialogRef<FaqComponent>;

	constructor( public dialog: MdDialog ) {}

	showConferenceTab(): void {
		this.selectedTab = this.conferenceTabIndex;
	}

	showWorkshopsTab(): void {
		this.selectedTab = this.workshopsTabIndex;
	}

	showFoodTab(): void {
		this.selectedTab = this.foodTabIndex;
	}

	showFAQ(): void {
		this.dialogRef = this.dialog.open(FaqComponent, {
			data: 'faq',
			panelClass: 'faq'
		});
	}

	get conferenceButtonColor(): string {
		return this.getTabButtonColor(this.conferenceTabIndex);
	}

	get workshopsButtonColor(): string {
		return this.getTabButtonColor(this.workshopsTabIndex);
	}

	get foodButtonColor(): string {
		return this.getTabButtonColor(this.foodTabIndex);
	}

	get faqButtonColor(): string {
		return this.getTabButtonColor(this.faqTabIndex);
	}

	getTabButtonColor(tabIndex: number): string {
		return this.selectedTab === tabIndex ? 'primary' : 'accent';
	}
}
