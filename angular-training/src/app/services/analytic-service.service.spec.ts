import { TestBed } from '@angular/core/testing';

import { AnalyticServiceService } from './analytic-service.service';

describe('AnalyticServiceService', () => {
  let service: AnalyticServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
