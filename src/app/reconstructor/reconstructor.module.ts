import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReconstructorRoutingModule } from './reconstructor-routing.module'
import { ReconstructorComponent } from './reconstructor.component'



@NgModule({
  declarations: [ReconstructorComponent],
  imports: [
    CommonModule,
    ReconstructorRoutingModule,
  ]
})
export class ReconstructorModule { }
