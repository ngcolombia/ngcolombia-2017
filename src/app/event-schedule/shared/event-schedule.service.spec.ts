import { TestBed, inject } from '@angular/core/testing';

import { EventScheduleService } from './event-schedule.service';

describe('EventScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventScheduleService]
    });
  });

  it('should be created', inject([EventScheduleService], (service: EventScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
