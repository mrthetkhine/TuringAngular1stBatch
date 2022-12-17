import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParentComponent } from './table-parent.component';

describe('TableParentComponent', () => {
  let component: TableParentComponent;
  let fixture: ComponentFixture<TableParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
