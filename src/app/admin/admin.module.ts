import { UsersService } from './services/users.service';
import { AdminRoutes } from './admin.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table/users-table.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CounterCardComponent } from './counter-card/counter-card.component';
import { AdminComponent } from './admin.component';
import { CodeInspectorComponent, FormatCodeInspectorResult } from './code-inspector/code-inspector.component';
import { DatePipe } from '@angular/common';
import { PlayersRadarChartComponent } from './players-radar-chart/players-radar-chart.component';

@NgModule({
  declarations: [
    UsersTableComponent,
    CounterCardComponent,
    AdminComponent,
    CodeInspectorComponent,
    FormatCodeInspectorResult,
    PlayersRadarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    SharedModule
  ],
  providers:[
    UsersService,
    DatePipe
  ]
})
export class AdminModule { }
