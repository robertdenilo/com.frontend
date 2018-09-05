import { TestBed, inject } from '@angular/core/testing';

import { Myserv1Service } from './myserv-1.service';

describe('Myserv1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Myserv1Service]
    });
  });

  it('should be created', inject([Myserv1Service], (service: Myserv1Service) => {
    expect(service).toBeTruthy();
  }));
});
