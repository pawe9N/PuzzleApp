import { Component } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';
import * as $ from 'jquery';

@Component({
  selector: 'easy-puzzle',
  templateUrl: './easy-puzzle.component.html',
  styleUrls: ['../puzzle/puzzle.component.css', './easy-puzzle.component.css']
})

export class EasyPuzzleComponent extends PuzzleComponent{

  constructor() {
    super();

    this.ngForVar = Array(9).fill(0).map((x,i)=>i+1);
    this.board = [];
    this.lvl = 1;
    this.inRow = 3;
  }

  ngOnInit() {
    $(document).ready(()=>{
      $('.puzzle1').on('click', (event)=>{
        this.clickPuzzle(event);
      });
    });
  }
}
