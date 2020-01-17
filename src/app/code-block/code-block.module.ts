import { NgModule } from '@angular/core'
import { CodeBlockDirective } from '../code-block.directive'



@NgModule({
  declarations: [CodeBlockDirective],
  exports: [CodeBlockDirective]
})
export class CodeBlockModule {}
