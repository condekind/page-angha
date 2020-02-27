import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExtractorRoutingModule } from './extractor-routing.module'
import { ExtractorComponent } from './extractor.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { FontAwesomeModule }  from '@fortawesome/angular-fontawesome'
import { CodeBlockModule } from '../code-block/code-block.module'



@NgModule({
  declarations: [ExtractorComponent],
  imports: [
    CommonModule,
    ExtractorRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    FontAwesomeModule,
    CodeBlockModule,
  ]
})
export class ExtractorModule { }
