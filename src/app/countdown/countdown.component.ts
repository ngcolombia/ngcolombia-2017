import { RemainingTime } from './models/remaining-time.model';
import { CountdownService } from './countdown.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-countdown',
	templateUrl: './countdown.component.html',
	styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
	@Input() targetDate: Date;
	@Input() currentDayMessage: string;

	remainingTime: RemainingTime;

	constructor(private countdownService: CountdownService) {
	}

	ngOnInit(): void {
		if (!this.targetDate) {
			return;
		}

		this.countdownService.getCountdownUntilDate(this.targetDate)
		.subscribe((remainingTime: RemainingTime) => {
			this.remainingTime = remainingTime;
		});
	}
}
