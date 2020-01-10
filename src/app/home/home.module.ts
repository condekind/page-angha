import { NgModule, Pipe } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent, Safe } from './home.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [HomeComponent, Safe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatTableModule
  ]
})
export class HomeModule { }
