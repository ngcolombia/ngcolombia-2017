import { RemainingTime } from './models/remaining-time.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Injectable()
export class CountdownService {

	constructor() { }

	getCountdownUntilDate(targetDate: Date): Observable<RemainingTime> {
		return Observable.interval(1000)
			.map((second: number) => this.getRemainingTime(targetDate));
	}

	getRemainingTime(targetDate: Date): RemainingTime {
		const now = new Date().getTime();
		const distanceMillisecons = targetDate.getTime() - now;

		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distanceMillisecons / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distanceMillisecons % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distanceMillisecons % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distanceMillisecons % (1000 * 60)) / 1000);

		return new RemainingTime(days, hours, minutes, seconds);

	}

}
