import { NgModule } from '@angular/core'
import { CodeBlockDirective } from './code-block.directive';
import { CodeBlockComponent } from './code-block.component'

@NgModule({
  declarations: [CodeBlockDirective, CodeBlockComponent],
  exports: [CodeBlockDirective, CodeBlockComponent]
})
export class CodeBlockModule {}
