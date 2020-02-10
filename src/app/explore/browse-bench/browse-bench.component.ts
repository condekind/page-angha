import { Component, OnInit, Inject } from '@angular/core'
import { Benchmark } from '../model'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-browse-bench',
  templateUrl: './browse-bench.component.html',
  styleUrls: ['./browse-bench.component.scss']
})
export class BrowseBenchComponent implements OnInit {

  bench: Benchmark
  contents: { [key: string]: string } = {}

  constructor(
    private httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) { bench }
  ) {
    this.bench = bench
  }

  async ngOnInit() {
    const { suite, name } = this.bench
    for (const file of this.bench.files) {
      this.contents[file] = await this.httpClient.get(
        `suites/${suite}/${name}/${file}`,
        { responseType: 'text' }
      ).toPromise()
    }
  }

}
