import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  public cookieNames = ['easy-level-points', 'medium-level-points', 'hard-level-points', 'insane-level-points'];
  private easyLevelPoints;
  private mediumLevelPoints;
  private hardLevelPoints;
  private insaneLevelPoints; 

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.initCookies();
    this.setAllPoints();
  }

  initCookiePuzzleLevelPoints(cookieName){
    if(!this.cookieService.check(cookieName)){
      this.cookieService.set( cookieName, '0' );
    }
  }

  initCookies(){
    this.cookieNames.forEach(cookieName => {
      this.initCookiePuzzleLevelPoints(cookieName);
    });
  }

  setAllPoints(){
    for(let i=0; i<this.cookieNames.length; i++){
      switch(i){
        case 0: this.easyLevelPoints = this.cookieService.get(this.cookieNames[i]);break;
        case 1: this.mediumLevelPoints = this.cookieService.get(this.cookieNames[i]);break;
        case 2: this.hardLevelPoints = this.cookieService.get(this.cookieNames[i]);break;
        case 3: this.insaneLevelPoints = this.cookieService.get(this.cookieNames[i]);break;
      }
    }
  }

  updateCookie(lvl){
    this.cookieService.set(this.cookieNames[lvl-1],  (parseInt(this.cookieService.get(this.cookieNames[lvl-1]))+1).toString());
    this.setAllPoints();
    $('.'+this.cookieNames[lvl-1]).text(this.cookieService.get(this.cookieNames[lvl-1]));
  }

}
