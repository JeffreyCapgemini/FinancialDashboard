import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendingsComponent } from './grid-placement/spendings/spendings.component';
import { SpendingOverviewComponent } from './grid-placement/spending-overview/spending-overview.component';
import { GridPlacementComponent } from './grid-placement/grid-placement.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendingsComponent,
    SpendingOverviewComponent,
    GridPlacementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
