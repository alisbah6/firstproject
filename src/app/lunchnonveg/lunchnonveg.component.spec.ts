import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchnonvegComponent } from './lunchnonveg.component';

describe('LunchnonvegComponent', () => {
  let component: LunchnonvegComponent;
  let fixture: ComponentFixture<LunchnonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchnonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchnonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
