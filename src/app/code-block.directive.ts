import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core'
import { edit } from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/sh.js'

@Directive({
  selector: '[appCodeBlock]'
})
export class CodeBlockDirective implements AfterViewInit {

  codeBlockRef: ElementRef
  minTextLines: number

  constructor(el: ElementRef) {
    this.codeBlockRef = el
  }

  @Input('appCodeBlock') text: string

  ngAfterViewInit() {
    const editor = edit(this.codeBlockRef.nativeElement)
    this.minTextLines = (this.text.match(/\n/g) || '').length + 2
    editor.setOptions({
      readOnly: true,
      showGutter: true,
      highlightGutterLine: false,
      highlightActiveLine: false,
      useSoftTabs: false,
      minLines: this.minTextLines,
      maxLines: Infinity,
      theme: 'ace/theme/monokai',
      mode: 'ace/mode/sh',
      fontSize: '1em',
      fontFamily: '"Monaco", "Menlo", "Ubuntu Mono", "Source Code Pro", "Inconsolata", "Consolas", monospace'
    })
    editor.renderer['$cursorLayer'].element.style.display = 'none'
    editor.$blockScrolling = Infinity
    editor.setValue(this.text)
    editor.renderer['scrollBarH'].element.hidden = true
    editor.renderer['scrollBarV'].element.hidden = true
    editor.clearSelection()
    this.codeBlockRef.nativeElement.style.maxWidth = '95%'
    this.codeBlockRef.nativeElement.style.margin = 'auto'
    this.codeBlockRef.nativeElement.style.marginBottom = '1em'
    this.codeBlockRef.nativeElement.style.minHeight = `${this.minTextLines * 14}px`
  }
}
