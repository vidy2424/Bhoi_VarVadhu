import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomComponent } from './groom.component';

describe('GroomComponent', () => {
  let component: GroomComponent;
  let fixture: ComponentFixture<GroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
