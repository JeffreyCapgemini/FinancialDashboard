import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpendingService } from '../../shared/spending.service';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss'
})
export class SpendingsComponent implements DoCheck {
  spendingsList: any[] = [];
  totalCost: number = 0;

  constructor(private spendingService: SpendingService) {}

  ngDoCheck(): void {
    const totalCostByCategory = this.spendingService.getTotalCostByCategory();
    this.totalCost = +totalCostByCategory['Overall'].toFixed(2) || 0;
  }
  

}
