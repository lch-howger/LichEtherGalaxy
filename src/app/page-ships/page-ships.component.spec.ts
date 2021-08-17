import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShipsComponent } from './page-ships.component';

describe('PageShipsComponent', () => {
  let component: PageShipsComponent;
  let fixture: ComponentFixture<PageShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
