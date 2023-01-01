import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetailPageComponent } from './to-do-detail-page.component';

describe('ToDoDetailPageComponent', () => {
  let component: ToDoDetailPageComponent;
  let fixture: ComponentFixture<ToDoDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
