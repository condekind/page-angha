import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoadingComponent } from './loading.component'



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [MatDialogModule, LoadingComponent],
  entryComponents: [LoadingComponent]
})
export class LoadingModule { }
