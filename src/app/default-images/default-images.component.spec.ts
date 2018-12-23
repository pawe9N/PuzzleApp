import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import * as $ from 'jquery';
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
  
  it('should have "ngOnInit" method', ()=>{
    expect(component.ngOnInit).toBeDefined();
  });

  it('should have "setImgUrls" method', ()=>{
    expect(component.ngOnInit).toBeDefined();
  })

  it('should have "selectImage" method', ()=>{
    expect(component.ngOnInit).toBeDefined();
  });

  it('should "emit" backgroundImage from target element in selectImageBackground EventEmitter after "selectImage" method was called', ()=>{
    spyOn(component.selectImageBackground, 'emit');
    let target = $('.defaultImage1');
    let backgroundImage = $('.defaultImage1').css('background-image');

    backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
    component.selectImage(target);

    expect(component.selectImageBackground.emit).toHaveBeenCalledWith(backgroundImage);
  });

});
