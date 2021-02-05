import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowseBenchComponent } from './browse-bench.component';

describe('BrowseBenchComponent', () => {
  let component: BrowseBenchComponent;
  let fixture: ComponentFixture<BrowseBenchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseBenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
