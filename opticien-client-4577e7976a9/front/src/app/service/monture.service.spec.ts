import { TestBed } from '@angular/core/testing';

import { MontureService } from './monture.service';

describe('MontureService', () => {
  let service: MontureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
