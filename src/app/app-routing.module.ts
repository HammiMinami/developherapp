import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { OnboardingPage } from './pages/onboarding/onboarding.page';
import { QuestionairesPage } from './pages/questionaires/questionaires.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: LoginPage },
  { path: 'dashboard', component: LoginPage },
  { path: 'onboarding', component: LoginPage },
  { path: 'questionaire', component: LoginPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
    // , { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
