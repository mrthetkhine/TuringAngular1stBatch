import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCalculatorComponent } from './total-calculator.component';

describe('TotalCalculatorComponent', () => {
  let component: TotalCalculatorComponent;
  let fixture: ComponentFixture<TotalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
