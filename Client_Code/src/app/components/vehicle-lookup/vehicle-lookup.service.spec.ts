import { TestBed, inject } from '@angular/core/testing';

import { VehicleLookupService } from './vehicle-lookup.service';

describe('VehicleLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleLookupService]
    });
  });

  it('should be created', inject([VehicleLookupService], (service: VehicleLookupService) => {
    expect(service).toBeTruthy();
  }));
});
