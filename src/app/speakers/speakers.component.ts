import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { Speaker } from './models/speaker.model';
import { SpeakerService } from './speaker.service';
import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
	selector: 'app-speakers',
	templateUrl: './speakers.component.html',
	styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
	speakers: Speaker[];
	dialogRef: MdDialogRef<SpeakerDetailComponent>;

	constructor(private speakerService: SpeakerService, public dialog: MdDialog) {
		this.speakerService.getAllSpeakers().subscribe((speakers: Speaker[]) => {
			this.speakers = speakers;
		});
	}

	showSpeakerDetail(speaker: Speaker): void {
		this.dialogRef = this.dialog.open(SpeakerDetailComponent, {
			data: speaker,
			panelClass: 'speakerDetail'
		});
	}

}
