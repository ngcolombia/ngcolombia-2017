import { Component } from '@angular/core';

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

	showConferenceTab(): void {
		this.selectedTab = this.conferenceTabIndex;
	}

	showWorkshopsTab(): void {
		this.selectedTab = this.workshopsTabIndex;
	}

	showFoodTab(): void {
		this.selectedTab = this.foodTabIndex;
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

	getTabButtonColor(tabIndex: number): string {
		return this.selectedTab === tabIndex ? 'primary' : 'accent';
	}
}
