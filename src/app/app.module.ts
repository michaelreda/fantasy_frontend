import { BaseUrlInterceptor } from './utils/httpBaseUrlInterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterFanIDComponent } from './register-fan-id/register-fan-id.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterFanIDComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
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
      }
   ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
