import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { CardComponent } from './components/card/card.component';
import { SignupComponent } from './components/signup/signup.component';
import { WebInfoComponent } from './components/web-info/web-info.component';
import { ServicesComponent } from './components/services/services.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { ClientProductsComponent } from './components/client-products/client-products.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentOpeningsComponent } from './components/current-openings/current-openings.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BridesComponent } from './components/brides/brides.component';
import { GroomComponent } from './components/groom/groom.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FullProfileComponent } from './components/full-profile/full-profile.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TermAndConditionsComponent } from './components/term-and-conditions/term-and-conditions.component';
import { SearchComponent } from './components/search/search.component';
import { AdminPanalComponent } from './components/admin-panal/admin-panal.component';
import { AdminSearchComponent } from './components/admin-search/admin-search.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'save', component: StudentViewComponent },
  { path: 'card', component: CardComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'info', component: WebInfoComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'OurProducts', component: OurProductsComponent },
  { path: 'ClientProducts', component: ClientProductsComponent },
  { path: 'About', component: AboutComponent },
  { path: 'CurrentOpenings', component: CurrentOpeningsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Bride', component: BridesComponent },
  { path: 'Groom', component: GroomComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'Profile/:id', component: FullProfileComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Term_And_Conditions', component: TermAndConditionsComponent },
  { path: 'Searchresults', component: SearchResultsComponent },
  { path: 'AdminPanal', component:  AdminPanalComponent },
  { path: 'AdminSearch', component:  AdminSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentViewComponent, CardComponent, HomePageComponent]
