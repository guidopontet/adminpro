import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    public token: string;
    public user: User;

    constructor(
        public _http: HttpClient,
        public _router: Router
    ) {
        this.token = localStorage.getItem('token');
    }

    isLogged() {
        if (this.token) {
            return true;
        }
        return false;
    }

    login(user: User, remember: boolean = false) {
        if (remember) {
            localStorage.setItem('email', user.email);
        } else {
            localStorage.removeItem('email');
        }

        let url = environment.url_services + '/login';
        return this._http.post(url, user).map((res: any) => {
            this.token = res.token;
            this.user = res.user;
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            return res;
        });
    }

    logout() {
        this.user = null;
        this.token = null;
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    }

    createUser(user: User) {
        let url = environment.url_services + '/user';
        return this._http.post(url, user).map((res: any) => {
            swal('Usuario creado', user.email, 'success');
            return res.user;
        });
    }
}
