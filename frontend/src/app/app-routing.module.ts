import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { DashboardCashierComponent } from './core/components/dashboard-cashier/dashboard-cashier.component';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "dashboard-cashier", component:DashboardCashierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
