import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBattleComponent } from './page-battle.component';

describe('PageBattleComponent', () => {
  let component: PageBattleComponent;
  let fixture: ComponentFixture<PageBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
