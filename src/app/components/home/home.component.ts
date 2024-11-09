import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ListComponent} from '../list/list.component';
import {ResizeComponent} from '../resize/resize.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListComponent,
    ResizeComponent
  ],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
