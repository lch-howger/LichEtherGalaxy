import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRankingComponent } from './page-ranking.component';

describe('PageRankingComponent', () => {
  let component: PageRankingComponent;
  let fixture: ComponentFixture<PageRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
