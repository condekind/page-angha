import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ChordAnalysisComponent } from './chordAnalysis.component'

describe('ChordAnalysisComponent', () => {
  let component: AnalysesComponent
  let fixture: ComponentFixture<ChordAnalysisComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordAnalysisComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordAnalysisComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
