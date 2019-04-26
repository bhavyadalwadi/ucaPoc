import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardsComponent } from './rewards/rewards.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { FulfillmentPreferencesComponent } from './fulfillment-preferences/fulfillment-preferences.component';
import { CommunicationPreferencesComponent } from './communication-preferences/communication-preferences.component';
import { LoyaltyPartnersComponent } from './loyalty-partners/loyalty-partners.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/rewards', pathMatch: 'full' },
  { path: 'rewards', component: RewardsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'payment-method', component: PaymentMethodComponent },
  { path: 'fulfillment-preferences', component: FulfillmentPreferencesComponent },
  { path: 'communication-preferences', component: CommunicationPreferencesComponent },
  { path: 'loyalty-partners', component: LoyaltyPartnersComponent },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
 }
