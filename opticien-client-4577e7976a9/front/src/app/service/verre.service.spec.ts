import { TestBed } from '@angular/core/testing';

import { VerreService } from './verre.service';

describe('VerreService', () => {
  let service: VerreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
