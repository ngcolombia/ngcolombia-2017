import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-community-partners',
	templateUrl: './community-partners.component.html',
	styleUrls: ['./community-partners.component.scss']
})
export class CommunityPartnersComponent implements OnInit {

	partners = [
		{
			name: 'Google Developer Expert Medellin',
			imgUrl: '/assets/img/gdg.png',
			url: 'https://www.meetup.com/GDG-Medellin'
		},
		{
			name: 'Pioneras Developers',
			imgUrl: '/assets/img/pioneras.png',
			url: 'https://www.meetup.com/PionerasDevelopers/'
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
