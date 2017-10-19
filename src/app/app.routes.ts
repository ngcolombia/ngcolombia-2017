import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PurchaseformComponent } from './purchaseform/purchaseform.component';

const routes: Routes = [
  { path: 'purchaseform', component: PurchaseformComponent },
  { path: '**', component: PurchaseformComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
