import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTooltipModule } from '@angular/material/tooltip'
import { ExploreRoutingModule } from './explore-routing.module'
import { ExploreComponent } from './explore.component'


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
  ]
})
export class ExploreModule { }
