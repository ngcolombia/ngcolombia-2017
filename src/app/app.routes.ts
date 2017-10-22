import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PurchaseErrorComponent } from './purchase-error/purchase-error.component';
import { PurchaseformComponent } from './purchaseform/purchaseform.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: '', component: MainPageComponent },
	{ path: 'purchase', component: PurchaseformComponent },
	{ path: 'response', component: ConfirmationComponent },
	{ path: 'purchase-error', component: PurchaseErrorComponent },
	{ path: '**', component: MainPageComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class FeatureRoutingModule { }
