import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerInfoDialogComponent } from './player-info-dialog/player-info-dialog.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AuthenticationService } from './services/authentication.service';
import { PlayersService } from './services/players.service';
import { UserService } from './services/user.service';
import { UserPlanService } from './services/user-plan.service';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { FormsModule } from '@angular/forms';
import { CodeService } from './services/code.service';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    PlanComponent,
    PlayerCardComponent,
    PlayerInfoDialogComponent,
    PlayersTableComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    CardModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule
  ],
  providers:[
    AuthenticationService,
    PlayersService,
    UserPlanService,
    UserService,
    CodeService
  ],
  exports:[
    DialogModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PlayersTableComponent,
    PlanComponent,
    TableModule,
    PanelModule,
    CardModule,
    ChartModule,
    TooltipModule,
    DropdownModule
  ]
})
export class SharedModule { }
