import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridPlacementComponent } from './grid-placement/grid-placement.component';
import { AddSpendingsComponent } from './add-spendings/add-spendings.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
