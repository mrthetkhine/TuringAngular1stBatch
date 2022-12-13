import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTemplateRefComponent } from './child-template-ref.component';

describe('ChildTemplateRefComponent', () => {
  let component: ChildTemplateRefComponent;
  let fixture: ComponentFixture<ChildTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTemplateRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
