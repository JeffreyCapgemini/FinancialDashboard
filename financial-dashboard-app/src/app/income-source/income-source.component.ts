import { Component } from '@angular/core';
import { IncomeService } from '../shared/income.service';

@Component({
  selector: 'app-income-source',
  templateUrl: './income-source.component.html',
  styleUrl: './income-source.component.scss',
  providers: [IncomeService]
})
export class IncomeSourceComponent {
  income: {} = {};

  constructor(public incomeService: IncomeService) {
  }

  ngOnInit() {
    this.incomeService.calculateHeightPercentage();
  }
}
