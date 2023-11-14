import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPlacementComponent } from './grid-placement.component';

describe('GridPlacementComponent', () => {
  let component: GridPlacementComponent;
  let fixture: ComponentFixture<GridPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridPlacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
