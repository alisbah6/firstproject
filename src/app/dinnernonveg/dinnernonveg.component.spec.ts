import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnernonvegComponent } from './dinnernonveg.component';

describe('DinnernonvegComponent', () => {
  let component: DinnernonvegComponent;
  let fixture: ComponentFixture<DinnernonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnernonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnernonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
