import { ActivatedRoute, Params } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() onToggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();
	showNavbar = true;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.queryParams.subscribe((params: Params) => {
			this.showNavbar = params['key'] !== 'i_will_attend_ng-colombia_fuck_yeah';
		});
	}

	toggleNav(): void {
		this.onToggleNav.emit(true);
	}
}
