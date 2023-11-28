import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeVsOutcomeComponent } from './income-vs-outcome.component';

describe('IncomeVsOutcomeComponent', () => {
  let component: IncomeVsOutcomeComponent;
  let fixture: ComponentFixture<IncomeVsOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeVsOutcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeVsOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
