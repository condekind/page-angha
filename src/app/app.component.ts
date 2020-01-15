import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lightTheme  = false

  toggleTheme = () => {
    this.lightTheme = !this.lightTheme
    if (this.lightTheme)
    {
      document.body.classList.remove('darkTheme')
      document.body.classList.add('lightTheme')
    }
    else
    {
      document.body.classList.remove('lightTheme')
      document.body.classList.add('darkTheme')
    }
  }

  constructor() {
    if (this.lightTheme)
      document.body.classList.add('lightTheme')
    else
      document.body.classList.add('darkTheme')
  }

  ngOnInit() {}
}
