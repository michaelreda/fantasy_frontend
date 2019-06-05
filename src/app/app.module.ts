import { ObjectivesService } from './objectives.service';
import { UserPlanService } from './user-plan.service';
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
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';


import { AppComponent } from './app.component';
import { RegisterFanIDComponent } from './register-fan-id/register-fan-id.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RoutesAuthenticationGuardService } from './routes-authentication-guard.service';
import { PlayerInfoDialogComponent } from './player-info-dialog/player-info-dialog.component';
import { PlanComponent } from './plan/plan.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { ObjectivesComponent } from './objectives/objectives.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFanIDComponent,
    LandingComponent,
    HomeComponent,
    PlayerInfoDialogComponent,
    PlanComponent,
    PlayersTableComponent,
    PlayerCardComponent,
    ObjectivesComponent
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
   TableModule,
   FieldsetModule,
   CheckboxModule,
   TooltipModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    AuthenticationService,
    RoutesAuthenticationGuardService,
    PlayersService,
    UserPlanService,
    ObjectivesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
