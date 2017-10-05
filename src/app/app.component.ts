import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild(MdSidenav) sidenav: MdSidenav;

	closeNav(selected: boolean): void {
		this.sidenav.close();
	}

	openNav(selected: boolean): void {
		this.sidenav.open();
	}
}
