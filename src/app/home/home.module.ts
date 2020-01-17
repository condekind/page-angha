import { NgModule, Pipe } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent, Safe } from './home.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'

import { CodeBlockModule } from '../code-block/code-block.module'


@NgModule({
  declarations: [HomeComponent, Safe],
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
