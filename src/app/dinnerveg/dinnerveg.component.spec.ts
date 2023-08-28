import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnervegComponent } from './dinnerveg.component';

describe('DinnervegComponent', () => {
  let component: DinnervegComponent;
  let fixture: ComponentFixture<DinnervegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnervegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnervegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
