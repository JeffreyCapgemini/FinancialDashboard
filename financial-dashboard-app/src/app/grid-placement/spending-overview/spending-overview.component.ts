import { Component, OnInit } from '@angular/core';
import { SpendingService } from '../../shared/spending.service';

@Component({
  selector: 'app-spending-overview',
  templateUrl: './spending-overview.component.html',
  styleUrl: './spending-overview.component.scss'
})

export class SpendingOverviewComponent implements OnInit{
  houseSpending: number = 0;
  personalSpending: number = 0;
  transportSpending: number = 0;

  ngOnInit(): void {
    this.updateSpending();
  }

  constructor(private spendingService: SpendingService){}

  updateSpending() {
    this.houseSpending = +this.spendingService.getTotalCostOfSubject('Housing').toFixed(2);
    this.personalSpending = +this.spendingService.getTotalCostOfSubject('Personal');
    this.transportSpending = +this.spendingService.getTotalCostOfSubject('Transport');
  }

  submit(expenseName: string, cost: number, date: string, subject: string) {
    this.spendingService.addSpending(expenseName, cost, date, subject);
    this.updateSpending();
  }
}