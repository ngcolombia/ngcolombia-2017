import { EventScheduleDetailComponent } from './event-schedule-detail/event-schedule-detail.component';
import { MdDialogRef, MdDialog } from '@angular/material';
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
	dialogRef: MdDialogRef<EventScheduleDetailComponent>;

	constructor(private service: EventScheduleService, public dialog: MdDialog) {
		this.$mainConferenceSchedule = service.getMainConferenceSchedule();
		this.$workshopsSchedule = service.getWorkshopsSchedule();
		this.$registrationSchedule = service.getRegistrationSchedule();
	}

	ngOnInit() {
	}

	showEventDetail(eventDetail: EventSchedule ): void {
		this.dialogRef = this.dialog.open(EventScheduleDetailComponent, {
			data: eventDetail,
			panelClass: 'eventDetail'
		});
	}

}
