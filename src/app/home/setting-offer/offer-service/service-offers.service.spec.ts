import { TestBed } from '@angular/core/testing';

import { ServiceOffers } from './service-offers.service';

describe('ServiceOffers', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOffers = TestBed.get(ServiceOffers);
    expect(service).toBeTruthy();
  });
});
