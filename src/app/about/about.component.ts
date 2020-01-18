import { Component, AfterContentInit, Input } from '@angular/core'
import teamref from '../../assets/info/teamref.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterContentInit {

  members

  constructor() { this.members = teamref.data }

  ngAfterContentInit() {
  }

}
