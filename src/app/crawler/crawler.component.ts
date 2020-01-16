import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { edit } from 'brace'
import 'brace/theme/monokai'
import 'brace/mode/sh.js'

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.scss']
})
export class CrawlerComponent implements AfterViewInit {

  @ViewChild('codeBlock01', {static: true}) codeBlock01: ElementRef<HTMLDivElement>
  @ViewChild('codeBlock02', {static: true}) codeBlock02: ElementRef<HTMLDivElement>

  constructor() {}

  codeBlock = (editor, text) => {
    editor.setOptions({
      readOnly: true,
      showGutter: false,
      highlightGutterLine: false,
      highlightActiveLine: false,
      minLines: (text.match(/\n/g) || '').length + 2,
      maxLines: Infinity,
      theme: 'ace/theme/monokai',
      mode: 'ace/mode/sh',
    })
    editor.renderer.$cursorLayer.element.style.display = 'none'
    editor.$blockScrolling = Infinity
    editor.setValue(text)
    editor.renderer.scrollBarH.element.hidden = true
    editor.renderer.scrollBarV.element.hidden = true
    editor.clearSelection()
  }

  ngAfterViewInit() {
    const cb01 = edit(this.codeBlock01.nativeElement)
    const cb02 = edit(this.codeBlock02.nativeElement)

    const codeText01 = `cd <path-to-this-repository>
cd src/crawler/

#compile Repository Crawler
javac -classpath .:jcabi-github-0.41-jar-with-dependencies.jar:org.eclipse.jgit-5.3.0.201903130848-r.jar RepositoryMiner.java

#run Repository Crawler
java -classpath .:jcabi-github-0.41-jar-with-dependencies.jar:org.eclipse.jgit-5.3.0.201903130848-r.jar RepositoryMiner`
    const codeText02 = `cd <path-to-this-repository>
cd src/crawler/
mv cleanRepository.sh ./cloned_repos
cd cloned_repos/
chmod +x cleanRepository.sh
sh cleanRepository.sh`

    this.codeBlock(cb01, codeText01)
    this.codeBlock(cb02, codeText02)
  }
}
