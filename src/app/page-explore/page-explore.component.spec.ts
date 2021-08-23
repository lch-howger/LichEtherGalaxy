import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExploreComponent } from './page-explore.component';

describe('PageExploreComponent', () => {
  let component: PageExploreComponent;
  let fixture: ComponentFixture<PageExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
