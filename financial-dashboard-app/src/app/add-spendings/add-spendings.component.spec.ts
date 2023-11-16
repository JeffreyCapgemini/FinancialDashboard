import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpendingsComponent } from './add-spendings.component';

describe('AddSpendingsComponent', () => {
  let component: AddSpendingsComponent;
  let fixture: ComponentFixture<AddSpendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSpendingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSpendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
