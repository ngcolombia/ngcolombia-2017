import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ParamMap, ActivatedRoute, Params } from '@angular/router';
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
				'<strong>Angular: From zero to Hero</strong>',
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
				'<strong>RxJS Like a Boss</strong>',
				'Morning snacks',
				'Free Coffee',
				'Swag'
			],
			checked: false
		}
	];

	constructor(private route: ActivatedRoute, private snackbar: MatSnackBar, private router: Router) { }

	ngOnInit() {
		this.route.queryParams.subscribe((params: Params) => {
			this.showBuyOptions = params['key'] === 'i_will_attend_ng-colombia_fuck_yeah';
		});
	}

	change(index: number) {
		if(this.showBuyOptions) {
			this.prices[index].checked = !this.prices[index].checked;
			this.validateOnlyOneWorkshop(index);
		}
	}

	validateOnlyOneWorkshop(index: number) {
		if ((this.prices[0].checked === this.prices[2].checked) && (this.prices[0].checked || this.prices[2].checked)) {
			setTimeout(() => {
				this.prices[index].checked = false;
				this.snackbar.open('😉 Please select only one workshop 😉', null, {
					duration: 5000
				});
			}, 0);
		}
	}

	save() {
		const atLeastOneSelection = this.prices[0].checked || this.prices[1].checked || this.prices[2].checked;
		if (atLeastOneSelection) {
			let data = '';
			if (this.prices[0].checked) {
				data += 'w1';
			}
			if (this.prices[1].checked) {
				data += 'mc';
			}
			if (this.prices[2].checked) {
				data += 'w2';
			}
			localStorage.setItem('purchaseItems', data);
			this.router.navigate(['/purchase']);
		} else {
			this.snackbar.open('😉 Make a selection first, please 😉', null, {
				duration: 5000
			});
		}
	}
}
