import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSimilarProfilesComponent } from './admin-similar-profiles.component';

describe('AdminSimilarProfilesComponent', () => {
  let component: AdminSimilarProfilesComponent;
  let fixture: ComponentFixture<AdminSimilarProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSimilarProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSimilarProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
