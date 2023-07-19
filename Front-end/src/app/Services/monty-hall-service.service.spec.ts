import { TestBed } from '@angular/core/testing';

import { MontyHallServiceService } from './monty-hall-service.service';

describe('MontyHallServiceService', () => {
  let service: MontyHallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontyHallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
