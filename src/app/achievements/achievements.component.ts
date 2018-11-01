import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  providers: [CookieService]
})
export class AchievementsComponent implements OnInit {
  private cookieNames = ['easy-level-points', 'medium-level-points', 'hard-level-points', 'insane-level-points'];
  private points = ['0', '0', '0', '0'];

  constructor(private cookieService: CookieService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.initAchievments();
  }

  initAchievments(){
    for(let i=0; i<4; i++){
      this.points[i] = this.cookieService.get(this.cookieNames[i]);
    }
    console.log(this.points)
  }

  updateAchievments(){
    for(let i=0; i<4; i++){
      if(this.points[i] != this.cookieService.get(this.cookieNames[i])){
        this.points[i] = this.cookieService.get(this.cookieNames[i]);
        return true;
      }
    }
    return false;
  }

}
