import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'resume',
    loadComponent: () => import('./components/pages/resume/resume.component').then((m) => m.ResumeComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/pages/projects/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'imprint',
    loadComponent: () => import('./components/pages/imprint/imprint.component').then((m) => m.ImprintComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./components/pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
