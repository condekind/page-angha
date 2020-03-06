import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StaticPropertiesComponent } from './staticProperties.component'


const routes: Routes = [
  {
    path : '',
    component : StaticPropertiesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPropertiesRoutingModule { }
