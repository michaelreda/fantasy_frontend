import { RedeemCodeComponent } from './redeem-code/redeem-code.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    ObjectivesComponent,
    RedeemCodeComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    FieldsetModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
