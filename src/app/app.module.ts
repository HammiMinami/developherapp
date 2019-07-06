import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { OnboardingPage } from './onboarding/onboarding.page';
import { QuestionairesPage } from './questionaires/questionaires.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    LoginPage,
    SignupPage,
    DashboardPage,
    OnboardingPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
