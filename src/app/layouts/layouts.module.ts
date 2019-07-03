import { PageHeaderComponent } from './default-layout/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { MenubarModule } from 'primeng/menubar';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    DefaultLayoutComponent,
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[
    DefaultLayoutComponent,
    LandingLayoutComponent
  ]
})
export class LayoutsModule { }
