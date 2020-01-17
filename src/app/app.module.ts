import { BrowserModule }            from '@angular/platform-browser'
import { NgModule }                 from '@angular/core'

import { AppRoutingModule }         from './app-routing.module'
import { AppComponent }             from './app.component'
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'
import { MatTabsModule }            from '@angular/material/tabs'
import { MatCardModule }            from '@angular/material/card'
import { MatSlideToggleModule }     from '@angular/material/slide-toggle'
import { MatMenuModule }            from '@angular/material/menu'
import { MatIconModule }            from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
