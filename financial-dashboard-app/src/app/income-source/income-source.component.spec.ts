import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSourceComponent } from './income-source.component';

describe('IncomeSourceComponent', () => {
  let component: IncomeSourceComponent;
  let fixture: ComponentFixture<IncomeSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeSourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
