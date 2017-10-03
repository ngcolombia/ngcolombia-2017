import { Speaker } from './../models/speaker.model';
import { Component, Optional, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-speaker-detail',
	templateUrl: './speaker-detail.component.html',
	styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent {
	constructor(@Optional() @Inject(MD_DIALOG_DATA) public speaker: Speaker) { }
}
