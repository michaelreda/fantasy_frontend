import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { LandingModule } from './landing/landing.module';
import { DefaultLayoutComponent } from './layouts';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { RegisterFanIDComponent } from './landing/register-fan-id/register-fan-id.component';
import { AdminRoutes } from './admin/admin.routes';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

export const AppRoutes = [
      {
        path: '',
        component: LandingLayoutComponent,
        // loadChildren: 'app/landing/landing.module#LandingModule',
        loadChidlren: () => LandingModule
      },
      {
        path: 'home',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        // loadChildren: 'app/home/home.module#HomeModule'
        loadChidlren: () => HomeModule
      },
      {
        path: 'admin',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        // loadChildren: 'app/admin/admin.module#AdminModule'
        loadChildren: ()=> AdminModule
      }
]