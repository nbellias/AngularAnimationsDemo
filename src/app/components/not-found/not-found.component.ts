import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  count = 3;
  ngOnInit() {
    console.log('Not Found Component');
    // after 3 seconds redirect to home page
    // update the count every second
    setInterval(() => {
      this.count--;
      if (this.count === 0) {
        window.location.href = '/home';
      }
    }, 1000);
  }
}
