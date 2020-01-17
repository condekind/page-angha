import { NgModule, Pipe } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'

import { CodeBlockModule } from '../code-block/code-block.module'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    CodeBlockModule,
  ]
})
export class HomeModule { }
