import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core'
import { edit, Editor } from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/sh.js'

@Directive({
  selector: '[appCodeBlock]'
})
export class CodeBlockDirective implements OnChanges {

  private editor: Editor
  @Input() textLines: number | 'auto' = 'auto'
  @Input() appCodeBlock: string | undefined

  constructor(ref: ElementRef<HTMLElement>) {
    const el = ref.nativeElement
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
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appCodeBlock) {
      this.editor.setValue('' + changes.appCodeBlock.currentValue)
      this.editor.clearSelection()
    }

    if (this.textLines === 'auto') {
      const minTextLines = (this.editor.getValue().match(/\n/g) || '').length + 2
      this.editor.setOption('minLines', minTextLines)
      this.editor.setOption('maxLines', Infinity)
    } else {
      this.editor.setOption('minLines', this.textLines)
      this.editor.setOption('maxLines', this.textLines)
    }
  }
}
