import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }     from '@angular/forms';
import { HttpModule }              from '@angular/http';
import { routing }                 from './app.routing';

import { AppComponent }            from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { AuthService }             from './auth/auth.service';
import { ErrorComponent }          from './errors/error.component';
import { ErrorService }            from './errors/error.service';
import { HeaderComponent }         from './header.component';
import { LogoutComponent }         from './auth/logout.component';
import { MessageComponent }        from './messages/message.component';
import { MessagesComponent }       from './messages/messages.component';
import { MessageListComponent }    from './messages/message-list.component';
import { MessageInputComponent }   from './messages/message-input.component';
import { SigninComponent }         from './auth/signin.component';
import { SignupComponent }         from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorComponent,
        HeaderComponent,
        LogoutComponent,
        MessageComponent,
        MessagesComponent,
        MessageListComponent,
        MessageInputComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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