import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bShowVideoCapture = true;
  bShowImageCapture = false;

  showVideoCapture(): void {
    this.bShowVideoCapture = true;
    this.bShowImageCapture = false;
  }
  showImageCapture(): void {
    this.bShowVideoCapture = false;
    this.bShowImageCapture = true;
  }
}
