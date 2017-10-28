import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-community-partners',
	templateUrl: './community-partners.component.html',
	styleUrls: ['./community-partners.component.scss']
})
export class CommunityPartnersComponent implements OnInit {

	partners = [
		{
			name: 'Google Developer Expert Medellín',
			imgUrl: '/assets/img/gdg.png',
			url: 'https://www.meetup.com/GDG-Medellin'
		},
		{
			name: 'Angular Medellín',
			imgUrl: '/assets/img/ANGULAR_MEDELLIN.png',
			url: 'http://angularmedellin.com/'
		},
		{
			name: 'Pioneras Developers',
			imgUrl: '/assets/img/pioneras.png',
			url: 'https://www.meetup.com/PionerasDevelopers/'
		},
		{
			name: 'MedellínJS',
			imgUrl: '/assets/img/medellinjs.jpg',
			url: 'https://www.meetup.com/medellinjs'
		},
		{
			name: 'Medellín.rb',
			imgUrl: '/assets/img/medellin-rb.jpg',
			url: 'https://www.meetup.com/medellin-rb/'
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
