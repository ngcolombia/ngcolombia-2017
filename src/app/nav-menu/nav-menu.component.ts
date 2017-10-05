import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
	@Input() showPrimaryButton = true;
	@Output() onMenuItemSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

	select(): void {
		this.onMenuItemSelected.emit(true);
	}
}
