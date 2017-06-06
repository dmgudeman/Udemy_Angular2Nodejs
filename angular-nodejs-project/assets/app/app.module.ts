import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { routing }                 from './app.routing';

import { AppComponent }            from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent }         from './header.component';
import { MessageComponent }        from './messages/message.component';
import { MessagesComponent }       from './messages/messages.component';
import { MessageListComponent }    from './messages/message-list.component';
import { MessageInputComponent }   from './messages/message-input.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        MessageComponent,
        MessagesComponent,
        MessageListComponent,
        MessageInputComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}