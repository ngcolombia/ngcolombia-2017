import { ActivatedRoute, Params } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Component, ViewChild, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

	hideBackToTop = true;

	@ViewChild(MdSidenav) sidenav: MdSidenav;

	constructor(private route: ActivatedRoute) {

	}

	ngOnInit() {
	}

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
