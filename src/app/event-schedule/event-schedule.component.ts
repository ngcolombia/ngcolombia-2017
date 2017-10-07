import { Observable } from 'rxjs/Observable';
import { EventSchedule } from './shared/event-schedule.model';
import { EventScheduleService } from './shared/event-schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-event-schedule',
	templateUrl: './event-schedule.component.html',
	styleUrls: ['./event-schedule.component.scss']
})
export class EventScheduleComponent implements OnInit {

	$schedule: Observable<EventSchedule[]>;

	constructor(private service: EventScheduleService) {
		this.$schedule = service.getSchedule();
	}

	ngOnInit() {
	}

}
