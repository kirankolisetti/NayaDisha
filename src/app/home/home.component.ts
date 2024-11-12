import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  handleHire() {
    alert('Hire button clicked');
    // Add logic to navigate or handle Hire functionality here
  }

  handleGetHired() {
    alert('Get Hired button clicked');
    // Add logic to navigate or handle Get Hired functionality here
  }

  navigateHome() {
    alert('Home button clicked');
    // Add logic to navigate to home or handle Home button functionality here
  }
}
