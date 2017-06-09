import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { ReactiveFormsModule }     from '@angular/forms';
import { HttpModule }              from '@angular/http';
import { routing }                 from './app.routing';

import { AppComponent }            from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { AuthService }             from './auth/auth.service';
import { ErrorComponent }          from './errors/error.component';
import { ErrorService }            from './errors/error.service';
import { HeaderComponent }         from './header.component';
import { LogoutComponent }         from './auth/logout.component';
import { MessageModule}            from './messages/message.module'
import { SigninComponent }         from './auth/signin.component';
import { SignupComponent }         from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorComponent,
        HeaderComponent,
        LogoutComponent,
        
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        MessageModule,
        ReactiveFormsModule,
        routing,
    ],
    providers: [
        AuthService,
        ErrorService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}