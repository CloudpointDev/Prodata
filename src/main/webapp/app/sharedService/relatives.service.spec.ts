import { TestBed } from '@angular/core/testing';

import { RelativesService } from './relatives.service';

describe('RelativesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelativesService = TestBed.get(RelativesService);
    expect(service).toBeTruthy();
  });
});
