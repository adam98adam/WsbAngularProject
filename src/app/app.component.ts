import { Component } from '@angular/core';
import { utils } from './class/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  util: utils;
  
  constructor(util: utils){
    this.util = util
  }
}
