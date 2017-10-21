import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';



@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

	prices = [
		{
			title: 'Workshop #1 ',
			value: 20,
			includes: [
				'Access to Workshop #1',
				'Morning snacks',
				'Free Coffee',
				'Swag'
			]
		},
		{
			title: 'Main Conference',
			value: 25,
			includes: [
				'Access to Main Conference',
				'Afternoon snacks',
				'Free Coffee',
				'Swag'
			],
			notes: '<strong>Important:</strong> Workshop tickets are not included in this bundle'
		},
		{
			title: 'Workshop #2',
			value: 20,
			includes: [
				'Access to Workshop #2',
				'Morning snacks',
				'Free Coffee',
				'Swag'
			]
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
