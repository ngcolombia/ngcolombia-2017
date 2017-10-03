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
	dialogOpening: boolean;
	dialogRef: MdDialogRef<SpeakerDetailComponent>;

	constructor(private speakerService: SpeakerService, public dialog: MdDialog) {
		this.speakerService.getAllSpeakers().subscribe((speakers: Speaker[]) => {
			this.speakers = speakers;
		});

		this.dialog.afterOpen.subscribe((result: any) => {
			this.dialogOpening = false;
		});
	}

	showSpeakerDetail(speaker: Speaker): void {
		if (!this.dialogOpening) {
			this.dialogOpening = true;
			this.dialogRef = this.dialog.open(SpeakerDetailComponent, {
				data: speaker,
				panelClass: 'speakerDetail'
			});

			this.dialogRef.afterClosed().subscribe((result: any) => {
				this.dialogRef = null;
			});
		}
	}

}
