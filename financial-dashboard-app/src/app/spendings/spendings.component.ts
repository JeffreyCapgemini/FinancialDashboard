import { Component, OnInit } from '@angular/core';
import { SpendingService } from '../shared/spending.service';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss'
})
export class SpendingsComponent implements OnInit {
  spendingsList: any[] = [];
  // personalSpendings: any[] = [];
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

  // addSpending(name: string, cost: string, date: string, subject: string) {
  //   // Convert the cost from string to number
  //   const numericCost: number = parseFloat(cost);
  
  //   // Check if the conversion was successful and not NaN
  //   if (!isNaN(numericCost)) {
  //     // Call the service method with the numeric cost
  //     this.spendingService.addSpending(name, numericCost, date, subject);
  
  //     // Update component properties after adding a spending
  //     this.spendingsList = this.spendingService.getSpendings();
  //     this.totalCost = this.spendingService.getTotalCost();
  //     this.personalCost = +this.spendingService.getTotalCostOfSubject('Personal').toFixed(2);
  //     this.houseCost = +this.spendingService.getTotalCostOfSubject('Housing').toFixed(2);
  //   } else {
  //     // Handle the case where the conversion failed (e.g., display an error message)
  //     console.error('Invalid cost entered. Please enter a valid number.');
  //   }
  // }
}

