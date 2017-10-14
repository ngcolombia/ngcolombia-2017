import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
		iconRegistry.addSvgIcon(
			'facebook',
			sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo-facebook.svg'));
		iconRegistry.addSvgIcon(
			'twitter',
			sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo-twitter.svg'));
		iconRegistry.addSvgIcon(
			'instagram',
			sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo-instagram.svg'));
		iconRegistry.addSvgIcon(
			'linkedin',
			sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo-linkedin.svg'));
	}
}
