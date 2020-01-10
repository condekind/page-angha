import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BenchmarksRoutingModule } from './benchmarks-routing.module'
import { BenchmarksComponent } from './benchmarks.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'



@NgModule({
  declarations: [BenchmarksComponent],
  imports: [
    CommonModule,
    BenchmarksRoutingModule,
    MatSidenavModule,
    MatTableModule,
  ]
})
export class BenchmarksModule { }
