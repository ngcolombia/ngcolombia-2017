import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';

import { Speaker } from './models/speaker.model';
import { speakersData } from './speaker.data';

@Injectable()
export class SpeakerService {
	getAllSpeakers(): Observable<Speaker[]> {
		return Observable.of(speakersData);
	}
}
