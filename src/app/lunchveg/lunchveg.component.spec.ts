import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchvegComponent } from './lunchveg.component';

describe('LunchvegComponent', () => {
  let component: LunchvegComponent;
  let fixture: ComponentFixture<LunchvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
