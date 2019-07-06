import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { OnboardingPage } from './pages/onboarding/onboarding.page';
import { QuestionairesPage } from './pages/questionaires/questionaires.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    // SignupPage,
    // DashboardPage,
    // OnboardingPage,
    // QuestionairesPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
