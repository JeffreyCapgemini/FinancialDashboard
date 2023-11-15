import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeSourceComponent } from './income-source/income-source.component';
import { SpendingsComponent } from './grid-placement/spendings/spendings.component';
import { SpendingOverviewComponent } from './grid-placement/spending-overview/spending-overview.component';
import { GridPlacementComponent } from './grid-placement/grid-placement.component';


@NgModule({
  declarations: [
    AppComponent,
    IncomeSourceComponent,
    SpendingsComponent,
    SpendingOverviewComponent,
    GridPlacementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
