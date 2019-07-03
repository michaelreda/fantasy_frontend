import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { LandingComponent } from './landing.component';
import { RegisterFanIDComponent } from './register-fan-id/register-fan-id.component';
import { RouterModule } from '@angular/router';
import { LandingRoutes } from './landing.routes';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    RegisterFanIDComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRoutes),
    SharedModule
  ]
})
export class LandingModule { }
