import { TestBed } from '@angular/core/testing';

import { LunetteSolaireService } from './lunette-solaire.service';

describe('LunetteSolaireService', () => {
  let service: LunetteSolaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunetteSolaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
