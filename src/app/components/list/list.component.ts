import { Component } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem() {
    this.items.pop();
  }
}
