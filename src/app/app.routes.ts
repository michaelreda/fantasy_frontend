// import { AdminModule } from './admin/admin.module';
// import { HomeModule } from './home/home.module';
// import { LandingModule } from './landing/landing.module';
import { DefaultLayoutComponent } from './layouts';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { RegisterFanIDComponent } from './landing/register-fan-id/register-fan-id.component';
import { AdminRoutes } from './admin/admin.routes';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { Routes } from '@angular/router';

// export function getLandingModule() { return LandingModule; }
// export function getHomeModule() { return HomeModule; }
// export function getAdminModule() { return AdminModule; }

export const AppRoutes: Routes = [
      {
        path: '',
        component: LandingLayoutComponent,
        loadChildren: './landing/landing.module#LandingModule',
        // loadChildren: getLandingModule
      },
      {
        path: 'home',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        loadChildren: './home/home.module#HomeModule'
        // loadChildren: getHomeModule
      },
      {
        path: 'admin',
        component: DefaultLayoutComponent,
        canActivate: [RoutesAuthenticationGuardService],
        loadChildren: './admin/admin.module#AdminModule'
        // loadChildren: getAdminModule
      }
]