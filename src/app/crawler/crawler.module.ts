import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CrawlerRoutingModule } from './crawler-routing.module'
import { CrawlerComponent } from './crawler.component'


@NgModule({
  declarations: [CrawlerComponent],
  imports: [
    CommonModule,
    CrawlerRoutingModule,
  ]
})
export class CrawlerModule { }
