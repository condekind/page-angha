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

  range = (n: number): any => Array.from({length: n}, (value, key) => null)

  chartGridMaker = (meta) => {
    const charts: string = [''].concat(meta.chartUrlArray).reduce((ch, url) =>
          ch + '<img src="' + url + '" alt="" class="chart-img">')
    return `<div class="img-grid">${charts}</div>`
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  constructor() {
    this.benchmarks = benchref.data
    // this.sleep(100).then(() => this.dataReady = true)
  }

  ngAfterContentInit() {
    this.dataReady = true
  }
}
