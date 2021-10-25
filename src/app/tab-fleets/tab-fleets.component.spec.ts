import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFleetsComponent } from './tab-fleets.component';

describe('TabFleetsComponent', () => {
  let component: TabFleetsComponent;
  let fixture: ComponentFixture<TabFleetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFleetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
