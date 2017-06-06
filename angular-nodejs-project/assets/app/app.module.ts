import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }     from '@angular/forms';
import { routing }                 from './app.routing';

import { AppComponent }            from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
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
        ReactiveFormsModule,
        routing,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}