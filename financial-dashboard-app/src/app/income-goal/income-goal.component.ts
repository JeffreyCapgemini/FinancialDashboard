import { Component } from '@angular/core';
import { IncomeService } from '../shared/income.service';

@Component({
  selector: 'app-income-goal',
  templateUrl: './income-goal.component.html',
  styleUrl: './income-goal.component.scss',
  providers: [IncomeService]
})
export class IncomeGoalComponent {

  income: number = 0;
  incomeGoal: number = 10000;
  incomeGoalPercents: number = 0;

  constructor(public incomeService: IncomeService) {
    
  }

  ngOnInit() {
    this.incomeService.calculateIncome();
    this.income = this.incomeService.income;
    this.calculateIncomeGoalPercentage()

    console.log(this.income)
    console.log(this.incomeGoalPercents)
  }

  calculateIncomeGoalPercentage() {
    return this.incomeGoalPercents = (100 * this.income) / this.incomeGoal;
  }

}
