import { Component, OnInit, Inject } from '@angular/core'
import { Benchmark } from '../model'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-browse-bench',
  templateUrl: './browse-bench.component.html',
  styleUrls: ['./browse-bench.component.scss']
})
export class BrowseBenchComponent implements OnInit {

  bench: Benchmark
  contents: { [key: string]: string } = {}

  constructor(@Inject(MAT_DIALOG_DATA) { bench }) {
    this.bench = bench
  }

  async ngOnInit() {
    const { suite, name } = this.bench
    for (const file of this.bench.files) {
      const res = await fetch(`suites/${suite}/${name}/${file}`)
      this.contents[file] = await res.text()
    }
  }

}
