import { Component, AfterContentInit, Pipe } from '@angular/core'
import benchref from '../../assets/info/benchref.json'

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss']
})
export class BenchmarksComponent implements AfterContentInit {

  benchmarks
  dataReady = false

  // Python > JS
  range = (n: number): any => Array.from({length: n}, (value, key) => null)

  // Creates a grid with images coming from URL's stored in the benchmarks file
  chartGridMaker = (meta) => {
    const charts: string = [''].concat(meta.chartUrlArray).reduce((ch, url) =>
          ch + '<img src="' + url + '" alt="" class="chart-img">')
    return `<div class="img-grid">${charts}</div>`
  }

  constructor() {
    // Stores benchmarks json file contents
    this.benchmarks = benchref.data
  }

  // Going with AfterContentInit because angular insists on screwing the
  // mat-expansion-panel-header style (it was being set to 48px or smth)
  ngAfterContentInit() {
    this.dataReady = true
  }
}
