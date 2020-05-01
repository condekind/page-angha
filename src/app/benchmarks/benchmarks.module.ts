import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BenchmarksRoutingModule } from './benchmarks-routing.module'
import { BenchmarksComponent } from './benchmarks.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule }  from '@fortawesome/angular-fontawesome'

import { CodeBlockModule } from '../code-block/code-block.module'


@NgModule({
  declarations: [BenchmarksComponent],
  imports: [
    CommonModule,
    BenchmarksRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    CodeBlockModule,
  ]
})
export class BenchmarksModule { }
