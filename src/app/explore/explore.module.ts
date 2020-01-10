import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ExploreRoutingModule } from './explore-routing.module'
import { ExploreComponent } from './explore.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'

import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class ExploreModule { }
