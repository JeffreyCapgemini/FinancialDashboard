import { Component } from '@angular/core';
import { IncomeService } from '../shared/income.service';
import { SpendingService } from '../shared/spending.service';

@Component({
  selector: 'app-income-vs-outcome',
  templateUrl: './income-vs-outcome.component.html',
  styleUrl: './income-vs-outcome.component.scss',
  providers: [IncomeService]
})
export class IncomeVsOutcomeComponent {


  income: number = 0;
  outcome: number = 0;
  chartOptions: {} = {};

  constructor(public incomeService: IncomeService, private spendingService: SpendingService) {

  }
  ngOnInit() {
    this.incomeService.calculateIncome()
    this.income = this.incomeService.income;

    const totalCostByCategory = this.spendingService.getTotalCostByCategory();
    this.outcome = +totalCostByCategory['Overall'].toFixed(2) || 0;

    this.createChart();
  }

  createChart() {
    this.chartOptions = {
      animationEnabled: true,
      backgroundColor: "transparent",
      theme: "dark1",
      title:{
      text: "Income vs Outcome",
      fontFamily: "system-ui",
      fontColor: "#FFFFFF",
      },
      data: [{
      type: "doughnut",
      fontColor: "#FFFFFF",
      yValueFormatString: "'€'#,###.##",
      indexLabel: "{name}",
      dataPoints: [
        { y: this.income, name: "Income" },
        { y: this.outcome, name: "Outcome" }
        ]
      }]
    }	
  }

}
