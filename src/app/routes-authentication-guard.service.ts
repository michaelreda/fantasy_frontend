import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class RoutesAuthenticationGuardService implements CanActivate{

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
