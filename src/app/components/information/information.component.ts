import {animate, state, style, transition, trigger } from '@angular/animations'
import { Component,  OnInit } from '@angular/core';
import { utils } from 'src/app/class/utils/utils';

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
     style({
      opacity: 1
     })
  ),
  state(
    'close',
     style({
      opacity: 0
     })
  ),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')])
])

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  animations: [fadeInOut]
})
export class InformationComponent implements OnInit {
  show: boolean = false;

  constructor(private util: utils){}

  ngOnInit(): void {
    this.util.redirectToLoginPage()
  }

  fadeInOut() {
    this.show = !this.show
  }
}
