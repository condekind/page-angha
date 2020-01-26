import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Editor, edit } from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/c_cpp'
import { BenchmarkCode } from './benchmark-code'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements AfterViewInit {

  @ViewChild('userInput', { static: true }) userInput: ElementRef<HTMLDivElement>
  userEditor: Editor
  items: BenchmarkCode[] = [
    {
      benchName: 'ecstasy',
      path: '/path/to/ecstasy',
      features: {
        edgecounter_number_of_edges: 10,
        varcounter_number_of_named_variables: 2,
        varcounter_number_of_variable_uses_using_getnumuses: 7
      },
      content: { code: 'FDHALISUDHF\nJNFDK\u0004\n' }
    },
    {
      benchName: 'death',
      path: '/path/to/death',
      features: {
        edgecounter_number_of_edges: 10,
        varcounter_number_of_named_variables: 2,
        varcounter_number_of_variable_uses_using_getnumuses: 7
      },
      content: {
        code: 'FDHALISUDHF\nJNFDK\u0004\n'
      }
    },
    {
      benchName: 'clodoveu',
      path: '/path/to/clodoveu',
      features: {
        edgecounter_number_of_edges: 10,
        varcounter_number_of_named_variables: 2,
        varcounter_number_of_variable_uses_using_getnumuses: 7
      },
      content: {
        code: 'FDHALISUDHF\nJNFDK\u0004\n'
      }
    }]

  constructor(private httpClient: HttpClient) { }

  async compile() {
    this.items = await this.httpClient.post<BenchmarkCode[]>('compile.php', this.userEditor.getValue()).toPromise()
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
  }

}
