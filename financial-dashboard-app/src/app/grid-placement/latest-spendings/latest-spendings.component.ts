import { Component } from '@angular/core';
import { SpendingService } from '../../shared/spending.service';
import { OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-latest-spendings',
  templateUrl: './latest-spendings.component.html',
  styleUrl: './latest-spendings.component.scss'
})

export class LatestSpendingsComponent implements OnInit, DoCheck  {

  latest: any;
  constructor(private spendings: SpendingService){}

  ngOnInit(): void {
    this.latest = this.getLatestSpendings();
  }

  ngDoCheck(): void {
    this.latest = this.getLatestSpendings();
  }

  getLatestSpendings() {
    return this.spendings.getLatestObjects();
  }
  

}
