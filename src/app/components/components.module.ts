import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCaptureComponent } from './image-capture/image-capture.component';
import { VideoCaptureComponent } from './video-capture/video-capture.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ImageCaptureComponent,
    VideoCaptureComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCaptureComponent,
    VideoCaptureComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
