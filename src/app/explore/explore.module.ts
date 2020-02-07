import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTabsModule } from '@angular/material/tabs'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CodeBlockModule } from '../code-block/code-block.module'
import { LoadingModule } from '../loading/loading.module'
import { BrowseBenchComponent } from './browse-bench/browse-bench.component'
import { ExploreRoutingModule } from './explore-routing.module'
import { ExploreComponent } from './explore.component'


@NgModule({
  declarations: [ExploreComponent, BrowseBenchComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    LoadingModule,
    CodeBlockModule,
    HttpClientModule,
  ],
  entryComponents: [BrowseBenchComponent]
})
export class ExploreModule { }
