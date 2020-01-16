import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CrawlerRoutingModule } from './crawler-routing.module'
import { CrawlerComponent } from './crawler.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [CrawlerComponent],
  imports: [
    CommonModule,
    CrawlerRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ]
})
export class CrawlerModule { }
