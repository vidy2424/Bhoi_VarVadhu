import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProfileAdminComponent } from './full-profile-admin.component';

describe('FullProfileAdminComponent', () => {
  let component: FullProfileAdminComponent;
  let fixture: ComponentFixture<FullProfileAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullProfileAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
