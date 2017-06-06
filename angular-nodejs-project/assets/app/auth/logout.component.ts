
import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-logout',
  templateUrl:`
      <div class="col-md-8 c0l-md-offset-2">
          <button class="btn btn-danger"(click)="onLogout()">Logout</button>
      </div>
  `
})
export class LogoutComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    onLogout() {
        
    }

}