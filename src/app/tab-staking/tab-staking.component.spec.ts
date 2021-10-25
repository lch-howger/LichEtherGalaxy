import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStakingComponent } from './tab-staking.component';

describe('TabStakingComponent', () => {
  let component: TabStakingComponent;
  let fixture: ComponentFixture<TabStakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabStakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
