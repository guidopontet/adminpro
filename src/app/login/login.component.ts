import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    public email: string;
    public rememberMe: boolean = false;

  constructor(
      public _router: Router,
      public _userService: UserService
  ) {}

  ngOnInit() {
    init_plugins();
    if ( localStorage.getItem('email') ) {
        this.email = localStorage.getItem('email');
        this.rememberMe = true;
    }
  }

  ingresar(form: NgForm) {
    if ( form.invalid ) {
        return;
    }
    let user = new User( null, form.value.email, form.value.password );
    this._userService.login( user, form.value.rememberMe ).subscribe(
        res => {
            this._router.navigate(['/dashboard']);
        }
    );
  }
}
