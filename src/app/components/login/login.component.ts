import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/class/user/user';
import { utils } from 'src/app/class/utils/utils';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: user = new user();

  constructor(private _router: Router, private util: utils) {}

  ngOnInit(): void {
    if(this.util.isUserLogged())
      this._router.navigate(['/'])
  }

  onSubmit() {
    sessionStorage.setItem('username', this.user.username)
    sessionStorage.setItem('password', this.user.password)
    this._router.navigate(['/'])
  }
}
