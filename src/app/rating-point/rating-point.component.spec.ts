import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPointComponent } from './rating-point.component';

describe('RatingPointComponent', () => {
  let component: RatingPointComponent;
  let fixture: ComponentFixture<RatingPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingPointComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
