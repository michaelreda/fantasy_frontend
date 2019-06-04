import { PlayersService } from './players.service';
import { JWTInterceptor } from './utils/JWTInterceptor';
import { AuthenticationService } from './authentication.service';
import { BaseUrlInterceptor } from './utils/httpBaseUrlInterceptor';
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
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';


import { AppComponent } from './app.component';
import { RegisterFanIDComponent } from './register-fan-id/register-fan-id.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { PlayerComponent } from './player/player.component';
import { PlayerInfoDialogComponent } from './player-info-dialog/player-info-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFanIDComponent,
    LandingComponent,
    HomeComponent,
    PlayerComponent,
    PlayerInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingComponent
      },
      {
         path: 'registerFanId',
         component: RegisterFanIDComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [RoutesAuthenticationGuardService]
      }
   ]),
   DialogModule,
   InputTextModule,
   ButtonModule,
   MessagesModule,
   MessageModule,
   PanelModule,
   CardModule,
   TableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    AuthenticationService,
    RoutesAuthenticationGuardService,
    PlayersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
