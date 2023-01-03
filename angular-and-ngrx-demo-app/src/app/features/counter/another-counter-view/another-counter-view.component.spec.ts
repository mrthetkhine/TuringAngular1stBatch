import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCounterViewComponent } from './another-counter-view.component';

describe('AnotherCounterViewComponent', () => {
  let component: AnotherCounterViewComponent;
  let fixture: ComponentFixture<AnotherCounterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherCounterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherCounterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
