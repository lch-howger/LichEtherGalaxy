import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMarketComponent } from './tab-market.component';

describe('TabMarketComponent', () => {
  let component: TabMarketComponent;
  let fixture: ComponentFixture<TabMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
