import { 
    Http,
    Headers,
    Response 
 }                           from '@angular/http';
import { 
    Injectable,
    EventEmitter,
 }                           from '@angular/core';
// 3rd party
import 'rxjs/Rx';
import { Observable }        from 'rxjs';
// my modules
import { Message }           from "./message.model";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
 
    constructor(
        private http:Http,
    ) { }
    
    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
                   .map((response: Response) => { // the .map method returns an observable
                       console.log(`in MessageService, addmessage() response   ${JSON.stringify(response)}`);
                       response.json()})          // .json strips out the headers etc. and returns only the body
                   .catch((error) => Observable.throw(error.json())); // .catch does not return an observable so need
                                                                      // explicity instantiate this, the throw makes
                                                                      // sure this is not returned as a success
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
                        .map((response: Response) => {
                            const messages = response.json().msgs; // msgs identical name to BE routes/messages/getMessages() payload
                            let transformedMessages: Message[] = [];
                            for (let message of messages) {
                                transformedMessages.push(new Message(message.content, 
                                                                     'Dummy', 
                                                                     message.id, 
                                                                     null));
                            }
                            this.messages = transformedMessages;  // This keeps the service in synch with the components
                            return transformedMessages;
                        })
                        .catch((error) => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}