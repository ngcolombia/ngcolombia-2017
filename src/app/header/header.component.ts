import { ActivatedRoute, Params } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() onToggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
	}

	toggleNav(): void {
		this.onToggleNav.emit(true);
	}
}
