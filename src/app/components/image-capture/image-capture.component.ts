import { Component, ElementRef, ViewChildren } from '@angular/core';
import { BarcodeResultItem } from 'dynamsoft-barcode-reader';
import { CaptureVisionRouter } from 'dynamsoft-capture-vision-router';
import '../../../cvr';

interface ResponseData {
  format: string;
  text: string;
}

@Component({
  selector: 'image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss'],
})
export class ImageCaptureComponent {

  pInit: Promise<CaptureVisionRouter> | null = null;
  format: string = '';
  responseData!: ResponseData;

  fileSelected: string | ArrayBuffer | null = '';
  imageLoad: boolean = false;
  messsage = '';

  async ngOnInit(): Promise<void> {
    this.pInit = CaptureVisionRouter.createInstance();
    this.setResponseDefault();
  }

  decodeImage = async (e: any) => {
    try {

      const file: File = e.target.files[0];
      if (file) {
        this.readImage(file);

        this.setResponseDefault();
        const router = await this.pInit;

        const result = await router!.capture(
          e.target.files[0],
          'ReadBarcodes_SpeedFirst'
        );

        for (let item of result.items) {
          // console.log((item as BarcodeResultItem).text);
          // texts += (item as BarcodeResultItem) + '\n';
          this.responseData = {
            format: (item as BarcodeResultItem).formatString,
            text: (item as BarcodeResultItem).text
          }
        }

        if (!result.items.length) alert('No barcode found');
      }

    } catch (ex: any) {
      let errMsg = ex.message || ex;
      console.error(errMsg);
      alert(errMsg);
    }
    e.target.value = '';
  };

  readImage(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.fileSelected = reader.result;
      this.imageLoad = true;
    };

    reader.onerror = (e) => {
      console.warn(e);
      this.messsage = "Error loading image";
    };

    reader.readAsDataURL(file);
  }

  async ngOnDestroy() {
    if (this.pInit) {
      const router = await this.pInit;
      router.dispose();
    }
    console.log('ImageCapture Component Unmount');
  }

  setResponseDefault = () => {
    this.responseData = { format: '', text: '', };
  }
}
