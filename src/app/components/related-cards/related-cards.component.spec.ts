import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCardsComponent } from './related-cards.component';

describe('RelatedCardsComponent', () => {
  let component: RelatedCardsComponent;
  let fixture: ComponentFixture<RelatedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
