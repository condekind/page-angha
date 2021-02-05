import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReconstructorComponent } from './reconstructor.component';

describe('ReconstructorComponent', () => {
  let component: ReconstructorComponent;
  let fixture: ComponentFixture<ReconstructorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
