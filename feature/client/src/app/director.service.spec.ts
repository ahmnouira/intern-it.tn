import { TestBed } from '@angular/core/testing';

import { DirectorService } from './director.service';

describe('DirectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectorService = TestBed.get(DirectorService);
    expect(service).toBeTruthy();
  });
});
