import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecentlyAddedMemberComponent } from './admin-recently-added-member.component';

describe('AdminRecentlyAddedMemberComponent', () => {
  let component: AdminRecentlyAddedMemberComponent;
  let fixture: ComponentFixture<AdminRecentlyAddedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRecentlyAddedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecentlyAddedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
