import { DefaultLayoutComponent } from './layouts';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { RegisterFanIDComponent } from './landing/register-fan-id/register-fan-id.component';
import { AdminRoutes } from './admin/admin.routes';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
      {
        path: '',
        component: LandingLayoutComponent,
        loadChildren: 'app/landing/landing.module#LandingModule'
      },
      {
        path: 'home',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        loadChildren: 'app/home/home.module#HomeModule'
      },
      {
        path: 'admin',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        loadChildren: 'app/admin/admin.module#AdminModule'
      }
]