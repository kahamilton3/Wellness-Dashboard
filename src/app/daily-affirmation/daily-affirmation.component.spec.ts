import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAffirmationComponent } from './daily-affirmation.component';

describe('DailyAffirmationComponent', () => {
  let component: DailyAffirmationComponent;
  let fixture: ComponentFixture<DailyAffirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAffirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAffirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
