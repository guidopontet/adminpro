import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['login.component.css']
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    constructor( 
        public _userService: UserService,
        public _router: Router
    ) {}

    ngOnInit() {
        init_plugins();
        
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
            password2: new FormControl(null, Validators.required),
            terms: new FormControl(null)
        }, { validators: this.comparePasswords('password', 'password2') });
    }

    registerUser() {
        if ( this.form.invalid ) {
            return;
        } 

        if (!this.form.value.terms) {
            swal('Condiciones', ' Debe aceptar las condiciones ', 'warning' );
            return;
        }

        let user = new User(
            this.form.value.name,
            this.form.value.email,
            this.form.value.password
        );

        this._userService.createUser( user ).subscribe( res => {
            console.log( res );
            this._router.navigate(['/login']);
        });
    }

    // Verificamos que las contraseñas sean iguales
    comparePasswords(pass1: string, pass2: string) {
        return ( group: FormGroup ) => {

            let password1 = group.controls[pass1].value;
            let password2 = group.controls[pass2].value;

            if ( password1 === password2) {
                return null;
            }

            return {
                sonIguales: true
            };
        };
    }
}
