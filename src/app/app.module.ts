import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UcaNavigationComponent } from './uca-navigation/uca-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { RewardsComponent } from './rewards/rewards.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { FulfillmentPreferencesComponent } from './fulfillment-preferences/fulfillment-preferences.component';
import { CommunicationPreferencesComponent } from './communication-preferences/communication-preferences.component';
import { LoyaltyPartnersComponent } from './loyalty-partners/loyalty-partners.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UcaNavigationComponent,
    RewardsComponent,
    OrdersComponent,
    AccountSettingsComponent,
    PaymentMethodComponent,
    FulfillmentPreferencesComponent,
    CommunicationPreferencesComponent,
    LoyaltyPartnersComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
