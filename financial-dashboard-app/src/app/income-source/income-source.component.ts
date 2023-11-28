import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { IncomeService } from '../shared/income.service';

@Component({
  selector: 'app-income-source',
  templateUrl: './income-source.component.html',
  styleUrl: './income-source.component.scss',
  providers: [IncomeService]
})
export class IncomeSourceComponent {

  constructor(public incomeService: IncomeService) {
  }

  ngOnInit() {
    this.calculateHeightPercentage();
  }

  calculateHeightPercentage(): void {
    this.income = this.incomeSources.reduce((acc: number, source) => {
      return acc + source.income
    }, 0)

    for (let income of this.incomeSources) {
      let heightPercentage = (100 * income.income) / this.income;
      income.percentage = heightPercentage;
    }
  }
}
