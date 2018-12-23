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
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zamek_w_B%C4%99dzinie_1.JPG", 
    "https://www.wanderluststorytellers.com/wp-content/uploads/2017/10/Best-Castles-in-France-Feature-1080x720.jpg",
    "http://images.fanpop.com/images/image_uploads/Boldt-Castle-castles-543276_1024_683.jpg",
    "https://www.tallshipsnola2018.com/wp-content/uploads/2017/07/ELISSA-1-e1502134242301.jpg",
    "https://cdn.cnn.com/cnnnext/dam/assets/160205192735-01-best-cruise-ships-disney-dream-super-169.jpg",
    "https://desktopwalls.net/wp-content/uploads/2014/06/Old%20Sailing%20Ship%20Free%20Wallpaper%20HD.jpg",
    "https://cdn.images.dailystar.co.uk/dynamic/28/photos/946000/620x/Plane-painted-white-548527.jpg",
    "https://cdn.cnn.com/cnnnext/dam/assets/130731134001-planes-film-dusty-horizontal-large-gallery.jpg",
    "http://www.airplanegame.us/wp-content/uploads/2016/01/North-American-P-51-Mustang-1941.jpg"];

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
