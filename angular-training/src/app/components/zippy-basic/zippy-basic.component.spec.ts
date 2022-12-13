import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyBasicComponent } from './zippy-basic.component';

describe('ZippyBasicComponent', () => {
  let component: ZippyBasicComponent;
  let fixture: ComponentFixture<ZippyBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZippyBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
