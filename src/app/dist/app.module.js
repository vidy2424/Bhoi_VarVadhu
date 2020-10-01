"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var login_service_1 = require("./sevices/login.service");
var angular_formio_1 = require("angular-formio");
var login_form_service_1 = require("./formio.service.ts/login-form.service");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var web_service_1 = require("./sevices/web.service");
var carousel_1 = require("ngx-bootstrap/carousel");
var modal_1 = require("ngx-bootstrap/modal");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var animations_1 = require("@angular/platform-browser/animations");
var tabs_1 = require("ngx-bootstrap/tabs");
var accordion_1 = require("ngx-bootstrap/accordion");
var helper_service_1 = require("./Helper/helper.service");
var auth_service_1 = require("./sevices/auth.service");
var student_view_component_1 = require("./components/student-view/student-view.component");
var card_component_1 = require("./components/card/card.component");
var login_component_1 = require("./components/login/login.component");
var home_component_1 = require("./components/home/home.component");
var signup_component_1 = require("./components/signup/signup.component");
var web_info_component_1 = require("./components/web-info/web-info.component");
var home_page_component_1 = require("./components/home-page/home-page.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var slider_component_1 = require("./components/slider/slider.component");
var footer_component_1 = require("./components/footer/footer.component");
var services_component_1 = require("./components/services/services.component");
var our_products_component_1 = require("./components/our-products/our-products.component");
var client_products_component_1 = require("./components/client-products/client-products.component");
var about_component_1 = require("./components/about/about.component");
var current_openings_component_1 = require("./components/current-openings/current-openings.component");
var contact_component_1 = require("./components/contact/contact.component");
var forms_1 = require("@angular/forms");
var card_slider_component_1 = require("./components/card-slider/card-slider.component");
var register_form_component_1 = require("./components/register-form/register-form.component");
var register_component_1 = require("./components/register/register.component");
var search_component_1 = require("./components/search/search.component");
var brides_component_1 = require("./components/brides/brides.component");
var groom_component_1 = require("./components/groom/groom.component");
var sidenav_component_1 = require("./components/sidenav/sidenav.component");
var full_profile_component_1 = require("./components/full-profile/full-profile.component");
var related_cards_component_1 = require("./components/related-cards/related-cards.component");
var similar_profiles_component_1 = require("./components/similar-profiles/similar-profiles.component");
var happy_marraige_slider_component_1 = require("./components/happy-marraige-slider/happy-marraige-slider.component");
var footer_homepage_component_1 = require("./components/footer-homepage/footer-homepage.component");
var search_results_component_1 = require("./components/search-results/search-results.component");
var term_and_conditions_component_1 = require("./components/term-and-conditions/term-and-conditions.component");
var login_page_navbar_component_1 = require("./login-page-navbar/login-page-navbar.component");
var recently_added_member_component_1 = require("./components/recently-added-member/recently-added-member.component");
var success_stories_component_1 = require("./components/success-stories/success-stories.component");
var admin_panal_component_1 = require("./components/admin-panal/admin-panal.component");
var admin_search_component_1 = require("./components/admin-search/admin-search.component");
var admin_nav_component_1 = require("./components/admin-nav/admin-nav.component");
var alert_component_1 = require("./components/alert/alert.component");
var alert_service_1 = require("./Helper/alert.service");
var full_profile_admin_component_1 = require("./components/full-profile-admin/full-profile-admin.component");
var admin_similar_profiles_component_1 = require("./components/admin-similar-profiles/admin-similar-profiles.component");
var admin_recently_added_member_component_1 = require("./components/admin-recently-added-member/admin-recently-added-member.component");
// import { initProviderFactory } from './sevices/init-app-provider.factory';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_routing_module_1.routingComponents,
                student_view_component_1.StudentViewComponent,
                card_component_1.CardComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                signup_component_1.SignupComponent,
                web_info_component_1.WebInfoComponent,
                home_page_component_1.HomePageComponent,
                navbar_component_1.NavbarComponent,
                slider_component_1.SliderComponent,
                footer_component_1.FooterComponent,
                services_component_1.ServicesComponent,
                our_products_component_1.OurProductsComponent,
                client_products_component_1.ClientProductsComponent,
                about_component_1.AboutComponent,
                current_openings_component_1.CurrentOpeningsComponent,
                contact_component_1.ContactComponent,
                card_slider_component_1.CardSliderComponent,
                register_form_component_1.RegisterFormComponent,
                register_component_1.RegisterComponent,
                search_component_1.SearchComponent,
                brides_component_1.BridesComponent,
                groom_component_1.GroomComponent,
                sidenav_component_1.SidenavComponent,
                full_profile_component_1.FullProfileComponent,
                related_cards_component_1.RelatedCardsComponent,
                similar_profiles_component_1.SimilarProfilesComponent,
                happy_marraige_slider_component_1.HappyMarraigeSliderComponent,
                footer_homepage_component_1.FooterHomepageComponent,
                search_results_component_1.SearchResultsComponent,
                term_and_conditions_component_1.TermAndConditionsComponent,
                login_page_navbar_component_1.LoginPageNavbarComponent,
                recently_added_member_component_1.RecentlyAddedMemberComponent,
                success_stories_component_1.SuccessStoriesComponent,
                admin_panal_component_1.AdminPanalComponent,
                admin_search_component_1.AdminSearchComponent,
                admin_nav_component_1.AdminNavComponent,
                alert_component_1.AlertComponent,
                full_profile_admin_component_1.FullProfileAdminComponent,
                admin_similar_profiles_component_1.AdminSimilarProfilesComponent,
                admin_recently_added_member_component_1.AdminRecentlyAddedMemberComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_formio_1.FormioModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                carousel_1.CarouselModule.forRoot(),
                modal_1.ModalModule.forRoot(),
                dropdown_1.BsDropdownModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                tabs_1.TabsModule.forRoot(),
                accordion_1.AccordionModule.forRoot(),
            ],
            entryComponents: [
                alert_component_1.AlertComponent
            ],
            providers: [web_service_1.WebService,
                helper_service_1.HelperService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_service_1.AuthInterceptor,
                    multi: true
                },
                // {
                //   provide: APP_INITIALIZER,
                //   useFactory: initProviderFactory,
                //   deps: [HelperService],
                //   multi: true,
                // },
                login_service_1.LoginService,
                angular_formio_1.FormioAppConfig,
                alert_service_1.AlertService,
                login_form_service_1.LoginFormService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
