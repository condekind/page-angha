import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Editor, edit } from 'brace'
import { Response } from './model'
import 'brace/theme/monokai'
import 'brace/mode/c_cpp'


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements AfterViewInit {

  @ViewChild('userInput', { static: true }) userInput: ElementRef<HTMLDivElement>
  userEditor: Editor

  items: Response | undefined

  constructor(private httpClient: HttpClient) { }

  async compile() {
    try {
      this.items = await this.httpClient.post<Response>('http://localhost:8080/similar-code-search/', this.userEditor.getValue()).toPromise()
      console.log(this.items)
    } catch (e) {
      console.error(e)
    }
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
      '  printf("Hello world!!\\n");\n' +
      '}\n'
    )
    editorInput.clearSelection()
    setTimeout(() => {
      this.compile()
    })
  }

}
