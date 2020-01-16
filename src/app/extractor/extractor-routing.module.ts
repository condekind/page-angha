import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ExtractorComponent } from './extractor.component'


const routes: Routes = [
  {
    path: '',
    component : ExtractorComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtractorRoutingModule { }
