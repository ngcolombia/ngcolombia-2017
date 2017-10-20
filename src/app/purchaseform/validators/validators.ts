/* Custom email and emialConfirm validator. */

import { FormGroup } from '@angular/forms';

// FORM GROUP VALIDATORS
export function matchingEmails(emailControlName: string, confirmEmailControlName: string) {
  return (group: FormGroup): { [key: string]: any } => {
    let emailControl = group.controls[emailControlName];
    let confirmEmailControl = group.controls[confirmEmailControlName];
    
    if (emailControl.value !== confirmEmailControl.value) {
      if (confirmEmailControl.errors == null) {
        confirmEmailControl.setErrors({ mismatchedEmails: true })
      }
      return {
        mismatchedEmails: true
      };
    } else if (confirmEmailControl.hasError('mismatchedEmails')) {
      confirmEmailControl.setErrors(null);
    }
  }
}