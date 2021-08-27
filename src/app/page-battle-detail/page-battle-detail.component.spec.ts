import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBattleDetailComponent } from './page-battle-detail.component';

describe('PageBattleDetailComponent', () => {
  let component: PageBattleDetailComponent;
  let fixture: ComponentFixture<PageBattleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBattleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBattleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
