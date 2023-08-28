import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastnonvegComponent } from './breakfastnonveg.component';

describe('BreakfastnonvegComponent', () => {
  let component: BreakfastnonvegComponent;
  let fixture: ComponentFixture<BreakfastnonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastnonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastnonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
