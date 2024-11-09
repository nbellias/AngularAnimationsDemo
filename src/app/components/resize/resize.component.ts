import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-resize',
  standalone: true,
  imports: [],
  animations: [
    trigger('resize', [
      state('small', style({ width: '100px', height: '100px' })),
      state('large', style({ width: '200px', height: '200px' })),
      transition('small <=> large', animate('0.3s ease-in-out'))
    ])
  ],
  templateUrl: './resize.component.html',
  styleUrl: './resize.component.css'
})
export class ResizeComponent {
  size: 'small' | 'large' = 'small';

  toggleSize() {
    this.size = this.size === 'small' ? 'large' : 'small';
  }
}
