import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // initial state
      transition(':enter, :leave', [
        animate('500ms ease-in-out', style({ opacity: 1 })), // animation duration and easing
      ]),
    ]),
    
      trigger('slideRightToLeft', [
        state('void', style({ transform: 'translateX(100%)' })), // initial state, off-screen to the right
        transition(':enter, :leave', [
          animate('500ms ease-in-out', style({ transform: 'translateX(0)' })), // move to the initial position
        ]),
      ]),
  ],
  
})
export class MainComponent {

}
