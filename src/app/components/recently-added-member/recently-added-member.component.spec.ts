import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedMemberComponent } from './recently-added-member.component';

describe('RecentlyAddedMemberComponent', () => {
  let component: RecentlyAddedMemberComponent;
  let fixture: ComponentFixture<RecentlyAddedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
