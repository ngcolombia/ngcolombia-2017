import { Component } from '@angular/core';

@Component({
	selector: 'app-main-banner',
	templateUrl: './main-banner.component.html',
	styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent {
	targetDate: Date;

	constructor() {
		this.targetDate = new Date(2017, 10, 18, 8, 0, 0);
	}

}
