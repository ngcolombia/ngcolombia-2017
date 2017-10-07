import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-newsletter-form',
	templateUrl: './newsletter-form.component.html',
	styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements AfterViewInit {
	constructor() { }

	ngAfterViewInit(): void {
		showMesh();
	}
}
