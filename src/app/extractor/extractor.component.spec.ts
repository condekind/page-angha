import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExtractorComponent } from './extractor.component';

describe('ExtractorComponent', () => {
  let component: ExtractorComponent;
  let fixture: ComponentFixture<ExtractorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
