import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-photographer-credit-link',
	templateUrl: './photographer-credit-link.component.html',
	styleUrls: ['./photographer-credit-link.component.scss']
})
export class PhotographerCreditLinkComponent {
	@Input() authorName: string;
	@Input() authorId: string;

}
