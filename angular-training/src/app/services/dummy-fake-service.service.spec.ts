import { TestBed } from '@angular/core/testing';

import { DummyFakeServiceService } from './dummy-fake-service.service';

describe('DummyFakeServiceService', () => {
  let service: DummyFakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyFakeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
