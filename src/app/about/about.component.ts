import { Component } from '@angular/core'
import teamref from '../../assets/info/teamref.json'
import { MatIconModule } from '@angular/material/icon'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  members
  faGithub = faGithub
  faAddressCard = faAddressCard

  constructor() { this.members = teamref.data }

}

