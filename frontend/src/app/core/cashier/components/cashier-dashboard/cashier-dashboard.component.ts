import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cashier-dashboard',
  templateUrl: './cashier-dashboard.component.html',
  styleUrls: ['./cashier-dashboard.component.css']
})
export class CashierDashboardComponent {

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.data.subscribe(data => {
      console.log(data);
    })
  }


}
