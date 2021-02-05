import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BenchmarksComponent } from './benchmarks.component';

describe('BenchmarksComponent', () => {
  let component: BenchmarksComponent;
  let fixture: ComponentFixture<BenchmarksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
