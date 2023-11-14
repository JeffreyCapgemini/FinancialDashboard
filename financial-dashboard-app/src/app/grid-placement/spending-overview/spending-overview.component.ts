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
    this.houseSpending = +this.spendingService.getTotalCostOfSubject('Housing').toFixed(2);

    this.personalSpending = +this.spendingService.getTotalCostOfSubject('Personal').toFixed(2);

    this.transportSpending = +this.spendingService.getTotalCostOfSubject('Transport').toFixed(2);

}

constructor(private spendingService: SpendingService){}

}
