import { Component, OnInit } from '@angular/core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.scss']
})
export class ExtractorComponent implements OnInit {
  
  faGithub = faGithub

  constructor() { }

  ngOnInit() {
  }

}
