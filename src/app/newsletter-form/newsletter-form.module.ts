import { MdButtonModule } from '@angular/material';
import { NewsletterFormComponent } from './newsletter-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NewsletterFormComponent],
    imports: [ CommonModule, MdButtonModule ],
    exports: [NewsletterFormComponent],
    providers: [],
})
export class NewsletterFormModule {}