import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';
import * as $ from 'jquery';

@Component({
  selector: 'hard-puzzle',
  templateUrl: './hard-puzzle.component.html',
  styleUrls: ['../puzzle/puzzle.component.css','./hard-puzzle.component.css']
})
export class HardPuzzleComponent extends PuzzleComponent {

  constructor() {
    super();

    this.board = [];
    this.lvl = 3;
    this.inRow = 5;
   }

  ngOnInit() {
    $(document).ready(()=>{
      $('.puzzle3').on('click', (event)=>{
        this.clickPuzzle(event);
      });
    });
  }

}
