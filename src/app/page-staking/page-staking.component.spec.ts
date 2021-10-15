import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStakingComponent } from './page-staking.component';

describe('PageStakingComponent', () => {
  let component: PageStakingComponent;
  let fixture: ComponentFixture<PageStakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
