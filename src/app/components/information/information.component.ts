import {animate, state, style, transition, trigger } from '@angular/animations'
import { Component } from '@angular/core';

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
export class InformationComponent {
  show: boolean = false;

  fadeInOut() {
    this.show = !this.show
  }
}
