import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ExploreRoutingModule } from './explore-routing.module'
import { ExploreComponent } from './explore.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule }         from '@angular/material/tooltip'


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
  ]
})
export class ExploreModule { }
