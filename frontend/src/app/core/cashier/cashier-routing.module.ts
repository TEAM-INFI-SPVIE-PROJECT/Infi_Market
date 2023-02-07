import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierDashboardComponent } from './components/cashier-dashboard/cashier-dashboard.component';

const routes: Routes = [
  {path: "dashboard", component:CashierDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
