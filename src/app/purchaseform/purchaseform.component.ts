import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MdButtonModule, MdDialogModule, MatTabsModule, MatSidenavModule, MatCardModule, MdIconRegistry, MatIconModule, MdIconModule, NoConflictStyleCompatibilityMode } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-purchaseform',
  templateUrl: './purchaseform.component.html',
  styleUrls: ['./purchaseform.component.scss']
})
export class PurchaseformComponent implements OnInit {

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);

  constructor() { }

  ngOnInit() {
  }

}
