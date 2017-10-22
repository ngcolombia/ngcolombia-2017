import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { EventSchedule } from '../shared/event-schedule.model';

@Component({
	selector: 'app-event-schedule-detail',
	templateUrl: './event-schedule-detail.component.html',
	styleUrls: ['./event-schedule-detail.component.scss']
})
export class EventScheduleDetailComponent implements OnInit {

	constructor( @Optional() @Inject(MD_DIALOG_DATA) public eventDetail: EventSchedule) { }

	ngOnInit() {
	}

}
