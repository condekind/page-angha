import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { edit } from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/c_cpp'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements AfterViewInit {

  @ViewChild('userInput', {static: true}) userInput: ElementRef<HTMLDivElement>

  constructor() { }

  ngAfterViewInit() {
    const editorInput = edit(this.userInput.nativeElement)
    editorInput.setTheme('ace/theme/monokai')
    editorInput.session.setMode('ace/mode/c_cpp')
    editorInput.$blockScrolling = Infinity
    editorInput.setValue('#include <stdlib.h>\n' +
      '#include <stdio.h>\n' +
      '\n' +
      'int main(int argc, char *argv[])\n' +
      '{\n' +
      '  int a, b = 0;\n' +
      '  print("Hello china!\\n Free Hong Kong!\\n");\n' +
      '}\n'
    )
    editorInput.clearSelection()
  }

}
