import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAPageComponent } from './child-apage.component';

describe('ChildAPageComponent', () => {
  let component: ChildAPageComponent;
  let fixture: ComponentFixture<ChildAPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
