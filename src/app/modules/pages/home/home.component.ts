import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showVideoCapture = true;

  showOptionCapture(event: boolean): void {
    this.showVideoCapture = event;
  }
}
