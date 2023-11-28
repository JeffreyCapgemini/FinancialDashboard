import { Component } from '@angular/core';
import { SpendingService } from '../../shared/spending.service';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.scss'
})


export class IncomesComponent implements DoCheck {
  spendingsList: any[] = [];
  totalCost: number = 0;

  constructor(private spendingService: SpendingService) {}

  ngDoCheck(): void {
    const totalCostByCategory = this.spendingService.getTotalCostByCategory();
    this.totalCost = +totalCostByCategory['Overall'].toFixed(2) || 0;
  }
  

}
