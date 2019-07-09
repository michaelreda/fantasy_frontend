import { JWTInterceptor } from './utils/interceptors/JWTInterceptor';
import { HttpResponseToastInterceptor } from './utils/interceptors/httpResponseToastInterceptor';
import { LayoutsModule } from './layouts/layouts.module';
import { LoaderInterceptor } from './utils/interceptors/loaderInterceptor';
import { LoaderService } from './loader.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';


import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { AppComponent } from './app.component';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { MessageService } from 'primeng/components/common/messageservice';
// import { AppRoutes } from './app.routes';
import { BaseUrlInterceptor } from './utils/interceptors/httpBaseUrlInterceptor';
import { DialogService } from './dialog.service';
import { AuthenticationService } from './shared';


import { DefaultLayoutComponent } from './layouts';
// import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { RegisterFanIDComponent } from './landing/register-fan-id/register-fan-id.component';
import { AdminRoutes } from './admin/admin.routes';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

const AppRoutes = [
      {
        path: '',
        component: LandingLayoutComponent,
        loadChildren: 'app/landing/landing.module#LandingModule',
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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    LayoutsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseToastInterceptor, multi: true },
    RoutesAuthenticationGuardService,
    LoaderService,
    ConfirmationService,
    MessageService,
    DialogService,
    AuthenticationService
    ],
    bootstrap: [AppComponent],
    exports:[]
})
export class AppModule { }
