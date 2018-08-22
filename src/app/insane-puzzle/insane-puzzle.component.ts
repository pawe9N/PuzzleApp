import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';
import * as $ from 'jquery';

@Component({
  selector: 'insane-puzzle',
  templateUrl: './insane-puzzle.component.html',
  styleUrls: ['../puzzle/puzzle.component.css','./insane-puzzle.component.css']
})
export class InsanePuzzleComponent extends PuzzleComponent {

  constructor() {
    super();

    this.ngForVar = Array(36).fill(0).map((x,i)=>i+1);
    this.board = [];
    this.lvl = 4;
    this.inRow = 6;
   }

  ngOnInit() {
    $(document).ready(()=>{
      $('.puzzle4').on('click', (event)=>{
        this.clickPuzzle(event);
      });
    });
  }

}
