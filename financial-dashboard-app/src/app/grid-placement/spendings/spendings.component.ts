import { Component, OnInit } from '@angular/core';
import { SpendingService } from '../../shared/spending.service';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss'
})
export class SpendingsComponent implements OnInit {
  spendingsList: any[] = [];
  totalCost: number = 0;
  personalCost: number = 0;
  houseCost: number = 0;

  constructor(private spendingService: SpendingService) {}

  ngOnInit(): void {
    this.spendingsList = this.spendingService.getSpendings();

    this.totalCost = this.spendingService.getTotalCost();

    this.personalCost = +this.spendingService.getTotalCostOfSubject('Personal').toFixed(2);

    this.houseCost = +this.spendingService.getTotalCostOfSubject('Housing').toFixed(2);
  }
}

