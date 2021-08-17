import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeroesComponent } from './page-heroes.component';

describe('PageHeroesComponent', () => {
  let component: PageHeroesComponent;
  let fixture: ComponentFixture<PageHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
