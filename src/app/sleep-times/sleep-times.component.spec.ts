import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepTimesComponent } from './sleep-times.component';

describe('SleepTimesComponent', () => {
  let component: SleepTimesComponent;
  let fixture: ComponentFixture<SleepTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
