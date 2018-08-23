import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { InsanePuzzleComponent } from './insane-puzzle/insane-puzzle.component';
import { CookieService } from 'ngx-cookie-service';
import { PointsTableComponent } from './points-table/points-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CookieService ]
})
export class AppComponent {
  private title = 'PuzzleApp';
  private imageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zamek_w_B%C4%99dzinie_1.JPG";
  private choosedLvl = 1;

  constructor(private cookieService: CookieService) { }

  @ViewChild(EasyPuzzleComponent) easyPuzzle:EasyPuzzleComponent;
  @ViewChild(MediumPuzzleComponent) mediumPuzzle:MediumPuzzleComponent;
  @ViewChild(HardPuzzleComponent) hardPuzzle:HardPuzzleComponent;
  @ViewChild(InsanePuzzleComponent) insanePuzzle:InsanePuzzleComponent;
  @ViewChild(PointsTableComponent) pointsTable:PointsTableComponent;

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
      case 4: this.insanePuzzle.createPuzzle();break;
    }
  }

  badImageUrl(){
    this.imageUrl = 'http://noticiasnet.com.ar/latiendanet/oc-content/themes/osclasswizards/images/no_photo.gif';
    $('.defaultLvlChooser').click();
  }
  
  changeImageUrl(url){
    this.imageUrl = url;
    $('.puzzle').css('background-image', 'url('+this.imageUrl+')');
    $('.image').prop('src', this.imageUrl);
    this.choosePuzzleLevelToCreate();
  }

  updateCookie(puzzleLvl) {
    this.pointsTable.updateCookie(puzzleLvl);
  }
}
