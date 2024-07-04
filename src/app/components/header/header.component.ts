import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showVideoCapture = true;
  @Output() showOption = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.showOptionCapture(this.showVideoCapture);
  }

  onShowVideoCapture(): void {
    this.showOptionCapture(true);
  }

  onShowImageCapture(): void {
    this.showOptionCapture(false);
  }

  showOptionCapture(boo: boolean): void {
    this.showVideoCapture = boo;
    this.showOption.emit(this.showVideoCapture)
  }
}
