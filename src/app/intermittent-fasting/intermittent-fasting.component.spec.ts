import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermittentFastingComponent } from './intermittent-fasting.component';

describe('IntermittentFastingComponent', () => {
  let component: IntermittentFastingComponent;
  let fixture: ComponentFixture<IntermittentFastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermittentFastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermittentFastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
