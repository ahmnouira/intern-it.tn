import { TestBed } from '@angular/core/testing';

import { ServicePostOfferService } from './service-post-offer.service';

describe('ServicePostOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePostOfferService = TestBed.get(ServicePostOfferService);
    expect(service).toBeTruthy();
  });
});
