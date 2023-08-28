import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchrecipeComponent } from './lunchrecipe.component';

describe('LunchrecipeComponent', () => {
  let component: LunchrecipeComponent;
  let fixture: ComponentFixture<LunchrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchrecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
