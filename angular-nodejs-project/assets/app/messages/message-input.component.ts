import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
    message: Message; // this is the message in the input field

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        )
    }
    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, 'Dave');
        console.log(`in MessageInputComponent onSubmit , message ${JSON.stringify(message)}`);
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    }

}