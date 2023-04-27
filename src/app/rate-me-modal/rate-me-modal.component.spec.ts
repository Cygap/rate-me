import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateMeModalComponent } from './rate-me-modal.component';

describe('RateMeModalComponent', () => {
  let component: RateMeModalComponent;
  let fixture: ComponentFixture<RateMeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateMeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateMeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
