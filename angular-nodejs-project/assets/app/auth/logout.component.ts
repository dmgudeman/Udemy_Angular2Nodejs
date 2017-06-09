
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AuthService }       from './auth.sevice';

@Component({
  selector:'app-logout',
  templateUrl:`
      <div class="col-md-8 c0l-md-offset-2">
          <button class="btn btn-danger"(click)="onLogout()">Logout</button>
      </div>
  `
})
export class LogoutComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin'])
        
    }

}