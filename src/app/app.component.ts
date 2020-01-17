import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { OverlayContainer }  from '@angular/cdk/overlay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lightTheme  = true

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

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('darkTheme')
    if (this.lightTheme)
      document.body.classList.add('lightTheme')
    else
      document.body.classList.add('darkTheme')
  }

  ngOnInit() {}
}
