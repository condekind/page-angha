import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExtractorRoutingModule } from './extractor-routing.module'
import { ExtractorComponent } from './extractor.component'



@NgModule({
  declarations: [ExtractorComponent],
  imports: [
    CommonModule,
    ExtractorRoutingModule,
  ]
})
export class ExtractorModule { }
