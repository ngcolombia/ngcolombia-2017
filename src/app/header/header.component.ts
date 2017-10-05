import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() onToggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();

	toggleNav(): void {
		this.onToggleNav.emit(true);
	}
}
