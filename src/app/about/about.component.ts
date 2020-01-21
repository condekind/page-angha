import { Component } from '@angular/core'
import teamref from '../../assets/info/teamref.json'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  members

  constructor() { this.members = teamref.data }

}
