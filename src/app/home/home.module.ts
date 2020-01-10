import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

import { MatTableModule } from '@angular/material/table'
import { MatSidenavModule } from '@angular/material/sidenav'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatSidenavModule,
  ]
})
export class HomeModule { }
