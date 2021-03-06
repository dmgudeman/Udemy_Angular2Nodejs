
import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-messages',
  template:`
    <div class="container">
        <div class="row">
            <app-message-input></app-message-input>
        </div>
        <br>
        <hr>
        <br>
        <div class="row">
            <app-message-list></app-message-list>
        </div>
    </div>
  `
})

export class MessagesComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}