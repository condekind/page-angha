import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lightTheme  = true
  darkTheme   = false

  toggleTheme = () => {
    this.lightTheme = !this.lightTheme
    this.darkTheme = !this.darkTheme
  }

  constructor() { }

  ngOnInit() {}
}
