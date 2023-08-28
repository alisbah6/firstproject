import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastrecipesComponent } from './breakfastrecipes.component';

describe('BreakfastrecipesComponent', () => {
  let component: BreakfastrecipesComponent;
  let fixture: ComponentFixture<BreakfastrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastrecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
