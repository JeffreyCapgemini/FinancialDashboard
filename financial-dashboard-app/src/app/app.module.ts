import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendingsComponent } from './grid-placement/spendings/spendings.component';
import { SpendingOverviewComponent } from './grid-placement/spending-overview/spending-overview.component';
import { GridPlacementComponent } from './grid-placement/grid-placement.component';
import { AddSpendingsComponent } from './add-spendings/add-spendings.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    SpendingsComponent,
    SpendingOverviewComponent,
    GridPlacementComponent,
    AddSpendingsComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
