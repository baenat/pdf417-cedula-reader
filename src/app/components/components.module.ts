import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCaptureComponent } from './image-capture/image-capture.component';
import { VideoCaptureComponent } from './video-capture/video-capture.component';


@NgModule({
  declarations: [
    ImageCaptureComponent,
    VideoCaptureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCaptureComponent,
    VideoCaptureComponent
  ]
})
export class ComponentsModule { }
