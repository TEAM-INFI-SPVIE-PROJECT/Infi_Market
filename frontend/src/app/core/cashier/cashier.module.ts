import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierDashboardComponent } from './components/cashier-dashboard/cashier-dashboard.component';


@NgModule({
  declarations: [
    CashierDashboardComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule
  ]
})
export class CashierModule { }
