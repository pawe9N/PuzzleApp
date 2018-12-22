import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DefaultImagesComponent } from './default-images.component';

describe('DefaultImagesComponent', () => {
  let component: DefaultImagesComponent;
  let fixture: ComponentFixture<DefaultImagesComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultImagesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ngForVar with length 9', () => {
    expect(component.ngForVar.length).toBe(9);
  });

  it('should have imgUrls with length 9', () => {
    expect(component.imgUrls.length).toBe(9);
  });

  it('should have 9 defaultImage divs', () => {
    component.ngForVar.forEach(number =>{
      expect(de.query(By.css('.defaultImage'+number)).nativeElement.className).toContain('defaultImage defaultImage'+number);
    });
  });
});
