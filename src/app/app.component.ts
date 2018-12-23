import { AchievementsComponent } from './achievements/achievements.component';
import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import * as $ from 'jquery';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { InsanePuzzleComponent } from './insane-puzzle/insane-puzzle.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private imageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zamek_w_B%C4%99dzinie_1.JPG";
  private choosedLvl = 1;
  private title = "PuzzleApp";

  constructor(private toastr: ToastrService,
              private zone:NgZone) { }

  @ViewChild(EasyPuzzleComponent) easyPuzzle:EasyPuzzleComponent;
  @ViewChild(MediumPuzzleComponent) mediumPuzzle:MediumPuzzleComponent;
  @ViewChild(HardPuzzleComponent) hardPuzzle:HardPuzzleComponent;
  @ViewChild(InsanePuzzleComponent) insanePuzzle:InsanePuzzleComponent;
  @ViewChild(PointsTableComponent) pointsTable:PointsTableComponent;
  @ViewChild(AchievementsComponent) achievements:AchievementsComponent;

  ngOnInit() {

    $(document).ready(()=>{
      $('.puzzle').css('background-image', 'url('+this.imageUrl+')');
      this.easyPuzzle.createPuzzle();  
    });

    $('.imageUrlText').keyup((e) => {
      if(e.which == 13){
        this.uploadImage();
      }
    });

    $('.uploadImageButton').on('click', () =>{
        this.uploadImage();
    });

    $('.lvlChooser').on('click', (event) =>{
      $('.puzzle').css('background-image', 'url('+this.imageUrl+')');
      $('.lvlChooser').css({'background-color':'#333', 'color':'white'});
      $(event.target).css({'background-color':'white', 'color':'#333'});
      this.choosedLvl = $(event.target).val();
      this.choosePuzzleLevelToCreate();
    });
  }

  uploadImage(){
    let url = $('.imageUrlText').val();

    if(url != ""){
      this.changeImageUrl(url);

      $('.imageUrlText').val('');
    }
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
    this.toastr.error("Bad image url!");
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
    this.zone.run(() => {this.showSuccessToastr(puzzleLvl)});
  }

  showSuccessToastr(puzzleLvl){

    if(this.achievements.updateAchievements()){
      this.toastr.info(`You earned an achievement!`);
    }

    switch(puzzleLvl)
    {
      case 1:
        this.toastr.success(`You solved easy puzzle!`);
        break;
      case 2:
        this.toastr.success(`You solved medium puzzle!`);
        break;
      case 3:
        this.toastr.success(`You solved hard puzzle!`);
        break;
      case 4:
        this.toastr.success(`You solved insane puzzle!`);
        break;
    }
  }
}
