import { TestBed } from '@angular/core/testing';

import { ServiceUserService } from './service-user.service';

describe('ServiceUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceUserService = TestBed.get(ServiceUserService);
    expect(service).toBeTruthy();
  });
});
