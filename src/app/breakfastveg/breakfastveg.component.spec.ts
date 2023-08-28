import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastvegComponent } from './breakfastveg.component';

describe('BreakfastvegComponent', () => {
  let component: BreakfastvegComponent;
  let fixture: ComponentFixture<BreakfastvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
