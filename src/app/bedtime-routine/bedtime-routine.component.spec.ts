import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedtimeRoutineComponent } from './bedtime-routine.component';

describe('BedtimeRoutineComponent', () => {
  let component: BedtimeRoutineComponent;
  let fixture: ComponentFixture<BedtimeRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedtimeRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedtimeRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
