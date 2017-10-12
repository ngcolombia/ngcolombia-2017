import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-community-partners',
	templateUrl: './community-partners.component.html',
	styleUrls: ['./community-partners.component.scss']
})
export class CommunityPartnersComponent implements OnInit {

	partners = [
		{
			name: 'partner 1',
			url: './../../assets/img/google-developers-experts.png'
		},
		{
			name: 'partner 2',
			url: './../../assets/img/google-developers-experts.png'
		},
		{
			name: 'partner 3',
			url: './../../assets/img/google-developers-experts.png'
		},
		{
			name: 'partner 4',
			url: './../../assets/img/google-developers-experts.png'
		},
		{
			name: 'partner 5',
			url: './../../assets/img/google-developers-experts.png'
		},
		{
			name: 'partner 6',
			url: './../../assets/img/google-developers-experts.png'
		},
	];

	constructor() { }

	ngOnInit() {
	}

}
