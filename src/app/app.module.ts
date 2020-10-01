
import { LoginService } from './sevices/login.service';
import { FormioAppConfig, FormioModule } from 'angular-formio';
import { LoginFormService } from './formio.service.ts/login-form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebService } from './sevices/web.service';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HelperService } from './Helper/helper.service';
import { AuthInterceptor } from './sevices/auth.service';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebInfoComponent } from './components/web-info/web-info.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { ClientProductsComponent } from './components/client-products/client-products.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentOpeningsComponent } from './components/current-openings/current-openings.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { BridesComponent } from './components/brides/brides.component';
import { GroomComponent } from './components/groom/groom.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FullProfileComponent } from './components/full-profile/full-profile.component';
import { RelatedCardsComponent } from './components/related-cards/related-cards.component';
import { SimilarProfilesComponent } from './components/similar-profiles/similar-profiles.component';
import { HappyMarraigeSliderComponent } from './components/happy-marraige-slider/happy-marraige-slider.component';
import { FooterHomepageComponent } from './components/footer-homepage/footer-homepage.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TermAndConditionsComponent } from './components/term-and-conditions/term-and-conditions.component';
import { LoginPageNavbarComponent } from './login-page-navbar/login-page-navbar.component';
import { RecentlyAddedMemberComponent } from './components/recently-added-member/recently-added-member.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';
import { AdminPanalComponent } from './components/admin-panal/admin-panal.component';
import { AdminSearchComponent } from './components/admin-search/admin-search.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './Helper/alert.service';
import { FullProfileAdminComponent } from './components/full-profile-admin/full-profile-admin.component';
import { AdminSimilarProfilesComponent } from './components/admin-similar-profiles/admin-similar-profiles.component';
import { AdminRecentlyAddedMemberComponent } from './components/admin-recently-added-member/admin-recently-added-member.component';


// import { initProviderFactory } from './sevices/init-app-provider.factory';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentViewComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    WebInfoComponent,
    HomePageComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    ServicesComponent,
    OurProductsComponent,
    ClientProductsComponent,
    AboutComponent,
    CurrentOpeningsComponent,
    ContactComponent,
    CardSliderComponent,
    RegisterFormComponent,
    RegisterComponent,
    SearchComponent,
    BridesComponent,
    GroomComponent,
    SidenavComponent,
    FullProfileComponent,
    RelatedCardsComponent,
    SimilarProfilesComponent,
    HappyMarraigeSliderComponent,
    FooterHomepageComponent,
    SearchResultsComponent,
    TermAndConditionsComponent,
    LoginPageNavbarComponent,
    RecentlyAddedMemberComponent,
    SuccessStoriesComponent,
    AdminPanalComponent,
    AdminSearchComponent,
    AdminNavComponent,
    AlertComponent,
    FullProfileAdminComponent,
    AdminSimilarProfilesComponent,
    AdminRecentlyAddedMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormioModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
  ],

  entryComponents: [
    AlertComponent
  ],
  providers: [WebService,
    HelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initProviderFactory,
    //   deps: [HelperService],
    //   multi: true,
    // },
    LoginService,
    FormioAppConfig,
    AlertService,
    LoginFormService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
