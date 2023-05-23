import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class utils {
    constructor(private _router: Router) {}

    isUserLogged(): boolean {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('password'))
              return true;
        return false;   
    }

    redirectToLoginPage() {
        if(!this.isUserLogged()) {
            this._router.navigate(['/login'])
        }
    }
}