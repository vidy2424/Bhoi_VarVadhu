import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyMarraigeSliderComponent } from './happy-marraige-slider.component';

describe('HappyMarraigeSliderComponent', () => {
  let component: HappyMarraigeSliderComponent;
  let fixture: ComponentFixture<HappyMarraigeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyMarraigeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyMarraigeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
