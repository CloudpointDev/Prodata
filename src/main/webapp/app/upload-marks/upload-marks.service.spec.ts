import { TestBed } from '@angular/core/testing';

import { UploadMarksService } from './upload-marks.service';

describe('UploadMarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadMarksService = TestBed.get(UploadMarksService);
    expect(service).toBeTruthy();
  });
});
