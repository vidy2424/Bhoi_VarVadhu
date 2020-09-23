import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageNavbarComponent } from './login-page-navbar.component';

describe('LoginPageNavbarComponent', () => {
  let component: LoginPageNavbarComponent;
  let fixture: ComponentFixture<LoginPageNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
