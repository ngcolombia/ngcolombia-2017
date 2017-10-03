import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {

	constructor() { }

	ngAfterViewInit(): void {
		showMesh();
	}
}
