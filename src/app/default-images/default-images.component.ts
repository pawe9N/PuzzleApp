import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'default-images',
  templateUrl: './default-images.component.html',
  styleUrls: ['./default-images.component.css']
})
export class DefaultImagesComponent implements OnInit {

  public ngForVar = Array(9).fill(0).map((x,i)=>i);
  public imgUrls = [
    '../../assets/castle1.jpg',
    '../../assets/castle2.jpg',
    '../../assets/castle3.jpg',
    '../../assets/ship1.jpg',
    '../../assets/ship2.jpg',
    '../../assets/ship3.jpg',
    '../../assets/plane1.jpg',
    '../../assets/plane2.jpg',
    '../../assets/plane3.jpg'
  ];

  @Output() selectImageBackground = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
    $(document).ready(()=>{
      this.setImgUrls();

      $('.defaultImage').on('click', (event)=>{
        $('.defaultImage').css('border', '1px solid white')
        $(event.target).css('border', '3px solid white');
        this.selectImage(event.target);
      });

      $('.defaultImage'+(Math.floor(Math.random() * 8))).click();
    });
  }

  setImgUrls(){
    this.ngForVar.forEach(i => {
      $('.defaultImage'+i).css('background-image', 'url("'+this.imgUrls[i]+'")');
    });
  }

  selectImage(target){
    let backgroundImage = $(target).css('background-image');
    backgroundImage = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
    this.selectImageBackground.emit(backgroundImage);
  }

}
