import { Component, ViewChild, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	hideBackToTop = true;

	@ViewChild(MdSidenav) sidenav: MdSidenav;

	closeNav(selected: boolean): void {
		this.sidenav.close();
	}

	openNav(selected: boolean): void {
		this.sidenav.open();
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		this.hideBackToTop = currentScrollPosition < 200;
	}
}
