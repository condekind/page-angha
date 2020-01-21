import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Editor, edit } from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/c_cpp'

interface BenchmarkCode {
  benchName: string
  path: string
  features: {
    numOfMul: number
    numOfLoops: number
    numOfEdges: number
  }
  content: {
    code: string
  }
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements AfterViewInit {

  userEditor: Editor
  resEditor: Editor

  @ViewChild('userInput', { static: true }) userInput: ElementRef<HTMLDivElement>
  @ViewChild('resOutput', { static: true }) resOutput: ElementRef<HTMLDivElement>

  constructor(private httpClient: HttpClient) { }

  async compile() {
    const res = await this.httpClient.post<BenchmarkCode[]>('compile.php', this.userEditor.getValue()).toPromise()
  }

  ngAfterViewInit() {
    const editorInput = this.userEditor = edit(this.userInput.nativeElement)
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

    const editorOutput = this.resEditor = edit(this.resOutput.nativeElement)
    editorOutput.setTheme('ace/theme/monokai')
    editorOutput.session.setMode('ace/mode/c_cpp')
    editorOutput.$blockScrolling = Infinity
    editorOutput.setValue('')
    editorOutput.clearSelection()
  }

}
