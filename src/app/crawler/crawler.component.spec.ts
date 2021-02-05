import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlerComponent } from './crawler.component';

describe('CrawlerComponent', () => {
  let component: CrawlerComponent;
  let fixture: ComponentFixture<CrawlerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
