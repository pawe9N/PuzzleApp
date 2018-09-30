import { PointsService } from './../points-table/points.service';
import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';
import * as $ from 'jquery';

@Component({
  selector: 'medium-puzzle',
  templateUrl: './medium-puzzle.component.html',
  styleUrls: ['../puzzle/puzzle.component.css','./medium-puzzle.component.css']
})
export class MediumPuzzleComponent extends PuzzleComponent {

  constructor() {
    super();

    this.ngForVar = Array(16).fill(0).map((x,i)=>i+1);
    this.board = [];
    this.lvl = 2;
    this.inRow = 4;
   }

  ngOnInit() {
    $(document).ready(()=>{
      $('.puzzle2').on('click', (event)=>{
        this.clickPuzzle(event);
      });
    });
  }
}
