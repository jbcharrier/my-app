import { TestBed } from '@angular/core/testing';

import { AutorisationsService } from './autorisations.service';

describe('AutorisationsService', () => {
  let service: AutorisationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorisationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
