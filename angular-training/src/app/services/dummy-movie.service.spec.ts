import { TestBed } from '@angular/core/testing';

import { DummyMovieService } from './dummy-movie.service';

describe('DummyMovieService', () => {
  let service: DummyMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
