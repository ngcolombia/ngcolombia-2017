import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-time-box',
	templateUrl: './time-box.component.html',
	styleUrls: ['./time-box.component.scss']
})
export class TimeBoxComponent {
	@Input() value: number;
	@Input() label: string;
}
