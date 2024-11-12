import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAngularComponent } from './components/card-angular/card-angular.component';
// import { SlAuthLibModule,LIBRARY_CONFIG } from 'authentication_frontend_library';
import { switchMap, of } from 'rxjs'
@NgModule({
  declarations: [
    AppComponent,
    CardAngularComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // SlAuthLibModule
  ],
  // providers: [   {
  //   provide: LIBRARY_CONFIG,
  //   useFactory: configFactory,
  //   deps: [HttpClient]
  // },],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function configFactory(http: HttpClient): any {
  const config = {
    "projectName": "Elevate",
    "landingPageTitle": "Create account",
    "baseUrl": "https://project-dev.elevate-apis.shikshalokam.org/",
    "redirectRouteOnLoginSuccess": "observation",
    "loginApiPath": "/user/v1/account/login",
    "logoutApiPath": "/user/v1/account/logout",
    "signUpApiPath": "/user/v1/account/create",
    "resetPasswordApiPath": "/user/v1/account/resetPassword",
    "otpGenerationApiPathForRegistration": "/user/v1/account/registrationOtp",
    "otpGenerationApiPathForResetPassword": "/user/v1/account/generateOtp",
    "supportEmail":"mentoredtest1@yopmail.com",
    "privacyPolicyUrl":"https://shikshalokam.org/mentoring/privacy-policy/",
    "termOfUseUrl":"https://shikshalokam.org/mentoring/term-of-use/"
}
return of(config).pipe(
  switchMap((data: any) => {
    return of(data);
  })
);
}

