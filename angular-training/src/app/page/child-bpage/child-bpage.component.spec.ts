import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBPageComponent } from './child-bpage.component';

describe('ChildBPageComponent', () => {
  let component: ChildBPageComponent;
  let fixture: ComponentFixture<ChildBPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
