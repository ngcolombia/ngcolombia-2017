import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScheduleDetailComponent } from './event-schedule-detail.component';

describe('EventScheduleDetailComponent', () => {
  let component: EventScheduleDetailComponent;
  let fixture: ComponentFixture<EventScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventScheduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
