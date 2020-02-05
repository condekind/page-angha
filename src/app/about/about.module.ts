import { NgModule }           from '@angular/core'
import { CommonModule }       from '@angular/common'

import { AboutRoutingModule } from './about-routing.module'
import { AboutComponent }     from './about.component'

import { MatSidenavModule }   from '@angular/material/sidenav'
import { MatCardModule }      from '@angular/material/card'
import { MatIconModule }      from '@angular/material/icon'
import { FontAwesomeModule }  from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [AboutComponent],
  imports: [
  CommonModule,
  AboutRoutingModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  FontAwesomeModule,
  ]
})
export class AboutModule { }

