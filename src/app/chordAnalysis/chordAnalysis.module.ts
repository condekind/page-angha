import { NgModule, Pipe } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ChordAnalysisRoutingModule } from './chordAnalysis-routing.module'
import { ChordAnalysisComponent } from './chordAnalysis.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'

import { CodeBlockModule } from '../code-block/code-block.module'


@NgModule({
  declarations: [ChordAnalysisComponent],
  imports: [
    CommonModule,
    ChordAnalysisRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    CodeBlockModule,
  ]
})
export class ChordAnalysisModule { }
