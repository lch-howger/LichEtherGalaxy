import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFleetsComponent } from './page-fleets.component';

describe('PageFleetsComponent', () => {
  let component: PageFleetsComponent;
  let fixture: ComponentFixture<PageFleetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFleetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
