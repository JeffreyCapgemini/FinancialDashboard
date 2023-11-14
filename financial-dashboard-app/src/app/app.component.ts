import { Component } from '@angular/core';
import { SpendingService } from './shared/spending.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SpendingService]
})
export class AppComponent {
  title = 'financial-dashboard-app';
}
