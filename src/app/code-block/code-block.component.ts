import { AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core'
import { edit, Editor } from 'brace'

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styles: [':host{display:block}']
})
export class CodeBlockComponent implements AfterViewInit {

  @ContentChild('pre', { static: true }) element: any
  editor: Editor

  constructor(private ref: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    const text = this.ref.nativeElement.childNodes[0].nodeValue || ''

    const el = this.ref.nativeElement
    el.style.maxWidth = '95%'
    el.style.margin = 'auto'
    el.style.marginBottom = '1em'

    const editor = this.editor = edit(el)
    editor.setOptions({
      readOnly: true,
      showGutter: true,
      highlightGutterLine: false,
      highlightActiveLine: false,
      useSoftTabs: false,
      theme: 'ace/theme/monokai',
      mode: 'ace/mode/sh',
      fontSize: '1em',
      fontFamily: '"Monaco", "Menlo", "Ubuntu Mono", "Source Code Pro", "Inconsolata", "Consolas", monospace'
    })
    editor.renderer['$cursorLayer'].element.style.display = 'none'
    editor.$blockScrolling = Infinity
    editor.renderer['scrollBarH'].element.hidden = true
    editor.renderer['scrollBarV'].element.hidden = true

    editor.setValue(text)
    editor.clearSelection()

    const minTextLines = (text.match(/\n/g) || '').length + 2
    editor.setOption('minLines', minTextLines)
    editor.setOption('maxLines', Infinity)
  }

}
