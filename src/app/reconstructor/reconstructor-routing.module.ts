import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ReconstructorComponent } from './reconstructor.component'


const routes: Routes = [
  {
    path: '',
    component : ReconstructorComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReconstructorRoutingModule { }
