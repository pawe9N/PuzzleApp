import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';
import * as $ from 'jquery';

@Component({
  selector: 'very-hard-puzzle',
  templateUrl: './very-hard-puzzle.component.html',
  styleUrls: ['../puzzle/puzzle.component.css','./very-hard-puzzle.component.css']
})
export class VeryHardPuzzleComponent extends PuzzleComponent {

  constructor() {
    super();

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
