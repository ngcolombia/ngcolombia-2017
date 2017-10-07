import { eventData } from './event-data';
import { Observable } from 'rxjs/Observable';
import { EventSchedule } from './event-schedule.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EventScheduleService {

	getSchedule(): Observable<EventSchedule[]> {
		return Observable.of(eventData);
	}

}
