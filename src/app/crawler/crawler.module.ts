import { NgModule }             from '@angular/core'
import { CommonModule }         from '@angular/common'

import { CrawlerRoutingModule } from './crawler-routing.module'
import { CrawlerComponent }     from './crawler.component'

import { MatSidenavModule }     from '@angular/material/sidenav'
import { MatCardModule }        from '@angular/material/card'
import { MatListModule }        from '@angular/material/list'
import { MatDividerModule }     from '@angular/material/divider'
import { MatIconModule }        from '@angular/material/icon'
import { FontAwesomeModule }    from '@fortawesome/angular-fontawesome'

import { CodeBlockModule }      from '../code-block/code-block.module'


@NgModule({
  declarations: [CrawlerComponent],
  imports: [
    CommonModule,
    CrawlerRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FontAwesomeModule,
    CodeBlockModule,
  ]
})
export class CrawlerModule { }
