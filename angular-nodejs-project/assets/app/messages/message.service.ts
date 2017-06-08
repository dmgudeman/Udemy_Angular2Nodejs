import { 
   Http,
   Headers,
   Response 
 }                           from '@angular/http';
import { Injectable }        from '@angular/core';
// 3rd party
import 'rxjs/Rx';
import { Observable }        from 'rxjs';
// my modules
import { Message }           from "./message.model";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
 
    constructor(
        private http:Http,
    ) { }
    
    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
                   .map((response: Response) => { // the .map method returns an observable
                       response.json()})          // .json strips out the headers etc. and returns only the body
                   .catch((error) => Observable.throw(error.json())); // .catch does not return an observable so need
                                                                      // explicity instantiate this, the throw makes
                                                                      // sure this is not returned as a success
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}