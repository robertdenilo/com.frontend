import { TestBed, inject } from '@angular/core/testing';

import { TouridService } from './tourid.service';

describe('TouridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TouridService]
    });
  });

  it('should be created', inject([TouridService], (service: TouridService) => {
    expect(service).toBeTruthy();
  }));
});
