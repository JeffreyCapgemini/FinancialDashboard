import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { SpendingOverviewComponent } from './spending-overview/spending-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendingsComponent,
    SpendingOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
