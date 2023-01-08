import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTodoCountComponent } from './completed-todo-count.component';

describe('CompletedTodoCountComponent', () => {
  let component: CompletedTodoCountComponent;
  let fixture: ComponentFixture<CompletedTodoCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTodoCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTodoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
