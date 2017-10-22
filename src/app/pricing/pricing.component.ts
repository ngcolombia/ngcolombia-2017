import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ParamMap, ActivatedRoute  } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
	showBuyOptions: boolean;
	prices = [
		{
			title: 'Workshop #1 ',
			value: 20,
			includes: [
				'Access to Workshop #1',
				'Morning snacks',
				'Free Coffee',
				'Swag'
			],
			checked: false
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
			notes: '<strong>Important:</strong> Workshop tickets are not included in this bundle',
			checked: false
		},
		{
			title: 'Workshop #2',
			value: 20,
			includes: [
				'Access to Workshop #2',
				'Morning snacks',
				'Free Coffee',
				'Swag'
			],
			checked: false
		}
	];

	constructor(private route: ActivatedRoute, private snackbar: MatSnackBar, private router: Router) { }

	ngOnInit() {
		if (this.route.snapshot.paramMap.get('enable') === '1') {
			this.showBuyOptions = true;
		}else {
			this.showBuyOptions = false;
		}
	}

	change(index: number) {
		this.prices[index].checked = !this.prices[index].checked;
		this.validateOnlyOneWorkshop(index);
	}

	validateOnlyOneWorkshop(index: number) {
		// TODO: Still not working
		if ((this.prices[0].checked === this.prices[2].checked) && (this.prices[0].checked || this.prices[2].checked)) {
			this.prices[index].checked = false;
			this.snackbar.open('Please select only one workshop', 'Close', {
				duration: 5000
			});
		}
	}

	save() {
		let data = '';
		if (this.prices[0].checked === true) {
			data += 'w1';
		}
		if (this.prices[1].checked === true) {
			data += 'mc';
		}
		if (this.prices[2].checked === true) {
			data += 'w2';
		}
		localStorage.setItem('purchaseItems', data);
		this.router.navigate(['/purchase']);
	}
}
