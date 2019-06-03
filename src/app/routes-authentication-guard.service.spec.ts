import { TestBed, inject } from '@angular/core/testing';

import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';

describe('RoutesAuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesAuthenticationGuardService]
    });
  });

  it('should be created', inject([RoutesAuthenticationGuardService], (service: RoutesAuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
