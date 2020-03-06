import { NgModule, Pipe } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StaticPropertiesRoutingModule } from './staticProperties-routing.module'
import { StaticPropertiesComponent } from './staticProperties.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'

import { CodeBlockModule } from '../code-block/code-block.module'


@NgModule({
  declarations: [StaticPropertiesComponent],
  imports: [
    CommonModule,
    StaticPropertiesRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    CodeBlockModule,
  ]
})
export class StaticPropertiesModule { }
