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

	$mainConferenceSchedule: Observable<EventSchedule[]>;
	$workshopsSchedule: Observable<EventSchedule[]>;
	$registrationSchedule: Observable<EventSchedule[]>;
	$lunchSchedule: Observable<EventSchedule[]>;

	constructor(private service: EventScheduleService) {
		this.$mainConferenceSchedule = service.getMainConferenceSchedule();
		this.$workshopsSchedule = service.getWorkshopsSchedule();
		this.$registrationSchedule = service.getRegistrationSchedule();
		this.$lunchSchedule = service.getLunchSchedule();
	}

	ngOnInit() {
	}

}
