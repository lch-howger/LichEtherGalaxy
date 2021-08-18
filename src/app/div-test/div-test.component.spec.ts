import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivTestComponent } from './div-test.component';

describe('DivTestComponent', () => {
  let component: DivTestComponent;
  let fixture: ComponentFixture<DivTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
