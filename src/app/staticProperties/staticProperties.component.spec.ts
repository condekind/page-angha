import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StaticPropertiesComponent } from './staticProperties.component'

describe('StaticPropertiesComponent', () => {
  let component: StaticPropertiesComponent
  let fixture: ComponentFixture<StaticPropertiesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticPropertiesComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPropertiesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
