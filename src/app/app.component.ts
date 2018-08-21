import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { VeryHardPuzzleComponent } from './very-hard-puzzle/very-hard-puzzle.component';
import { PuzzleComponent } from './puzzle/puzzle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'PuzzleApp';
  private imageUrl = "https://polska-flaga.pl/userdata/gfx/6ab36c9494c25b752941d65cf6d1140f.jpg";
  private choosedLvl = 1;

  @ViewChild(EasyPuzzleComponent) easyPuzzle:EasyPuzzleComponent;
  @ViewChild(MediumPuzzleComponent) mediumPuzzle:MediumPuzzleComponent;
  @ViewChild(HardPuzzleComponent) hardPuzzle:HardPuzzleComponent;
  @ViewChild(VeryHardPuzzleComponent) varyHardPuzzle:VeryHardPuzzleComponent;

  ngOnInit() {
    $(document).ready(()=>{
      $('.puzzle').css('background-image', 'url('+this.imageUrl+')');
      this.easyPuzzle.createPuzzle();
    });

    $('.imageUrlText').keyup((e) => {
      if(e.which == 13){
          $('.uploadImageButton').click();
      }
    });

    $('.uploadImageButton').on('click', () =>{
        let url = $('.imageUrlText').val();

        if(url != ""){
          this.changeImageUrl(url);
          $('.puzzle').css('background-image', 'url('+this.imageUrl+')');
          this.choosePuzzleLevelToCreate();
  
          $('.imageUrlText').val('');
        }
    });

    $('.lvlChooser').on('click', (event) =>{
      $('.puzzle').css('background-image', 'url('+this.imageUrl+')');
      $('.lvlChooser').css({'background-color':'#333', 'color':'white'});
      $(event.target).css({'background-color':'white', 'color':'#333'});
      this.choosedLvl = $(event.target).val();
      this.choosePuzzleLevelToCreate();
    });

  }

  choosePuzzleLevelToCreate(){
    switch(this.choosedLvl){
      case 1: this.easyPuzzle.createPuzzle();break;
      case 2: this.mediumPuzzle.createPuzzle();break;
      case 3: this.hardPuzzle.createPuzzle();break;
      case 4: this.varyHardPuzzle.createPuzzle();break;
    }
  }

  badImageUrl(){
    this.imageUrl = 'http://noticiasnet.com.ar/latiendanet/oc-content/themes/osclasswizards/images/no_photo.gif';
    $('.defaultLvlChooser').click();
  }
  
  changeImageUrl(url){
    this.imageUrl = url;
  }
}
