import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeGoalComponent } from './income-goal.component';

describe('IncomeGoalComponent', () => {
  let component: IncomeGoalComponent;
  let fixture: ComponentFixture<IncomeGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeGoalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
