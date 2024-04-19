import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagmentComponent } from './content-managment.component';

describe('ContentManagmentComponent', () => {
  let component: ContentManagmentComponent;
  let fixture: ComponentFixture<ContentManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentManagmentComponent]
    });
    fixture = TestBed.createComponent(ContentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
