import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrentDateComponent } from './show-current-date.component';

describe('ShowCurrentDateComponent', () => {
  let component: ShowCurrentDateComponent;
  let fixture: ComponentFixture<ShowCurrentDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCurrentDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCurrentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
