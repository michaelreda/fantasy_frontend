import { DefaultLayoutComponent } from './layouts';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { RegisterFanIDComponent } from './landing/register-fan-id/register-fan-id.component';
import { AdminRoutes } from './admin/admin.routes';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

export const AppRoutes = [
      {
        path: '',
        component: LandingLayoutComponent,
        loadChildren: 'src/app/landing/landing.module#LandingModule',
      },
      {
        path: 'home',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        loadChildren: 'src/app/home/home.module#HomeModule'
      },
      {
        path: 'admin',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        loadChildren: 'src/app/admin/admin.module#AdminModule'
      }
]