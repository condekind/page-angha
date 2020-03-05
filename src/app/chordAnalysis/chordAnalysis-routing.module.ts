import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChordAnalysisComponent } from './chordAnalysis.component'


const routes: Routes = [
  {
    path : '',
    component : ChordAnalysisComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChordAnalysisRoutingModule { }
