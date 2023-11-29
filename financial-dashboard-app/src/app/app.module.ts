import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeSourceComponent } from './income-source/income-source.component';
import { SpendingsComponent } from './grid-placement/spendings/spendings.component';
import { SpendingOverviewComponent } from './grid-placement/spending-overview/spending-overview.component';
import { GridPlacementComponent } from './grid-placement/grid-placement.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IncomesComponent } from './grid-placement/incomes/incomes.component';
import { LatestSpendingsComponent } from './grid-placement/latest-spendings/latest-spendings.component';
import { IncomeVsOutcomeComponent } from './income-vs-outcome/income-vs-outcome.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CalendarComponent } from './grid-placement/calender/calender.component';
import { NavigationComponent } from './grid-placement/navigation/navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    IncomeSourceComponent,
    SpendingsComponent,
    SpendingOverviewComponent,
    GridPlacementComponent,
    DropdownDirective,
    IncomesComponent,
    LatestSpendingsComponent,
    IncomeVsOutcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    ModalModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
