import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { environment } from '../../environments/environment'
import { LoadingComponent } from '../loading/loading.component'
import { Response } from './model'
import { CodeBlockDirective } from '../code-block/code-block.directive'
import { Annotation } from 'brace'


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  faInfoCircle = faInfoCircle

  items: Response | undefined
  error = ''

  sampleCode = `
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char *argv[])
{
  int a, b = 0;
  printf("Hello world!!\\n");
}
`

  constructor(
    private httpClient: HttpClient,
    private matDialog: MatDialog) { }

  async compile(editor: CodeBlockDirective) {
    const ref = this.matDialog.open(LoadingComponent, { disableClose: true })
    const annotations: Annotation[] = []
    try {
      this.items = await this.httpClient.post<Response>(environment.searchUrl, editor.getSession().getValue()).toPromise()
      this.error = ''
    } catch (e) {
      this.items = undefined
      console.error(e)
      if (e instanceof HttpErrorResponse) {
        if (e.status === 418) {
          this.error = e.error
          const regex = /<stdin>:(\d+):(\d+): ((?:error)|(?:warning)): (.*)/g
          let match: RegExpExecArray
          // tslint:disable-next-line: no-conditional-assignment
          while (match = regex.exec(this.error)) {
            const row = +match[1] - 1
            const column = +match[2]
            const type = match[3] as 'error' | 'warning'
            const text = match[4]
            annotations.push({ column, row, type, text })
          }
        }
      }
    } finally {
      ref.close()
      editor.getSession().setAnnotations(annotations)
    }
  }

}
