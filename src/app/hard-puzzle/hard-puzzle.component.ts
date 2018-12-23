import { Component } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';

@Component({
  selector: 'hard-puzzle',
  templateUrl: './hard-puzzle.component.html',
  styleUrls: ['../puzzle/puzzle.component.css','./hard-puzzle.component.css']
})
export class HardPuzzleComponent extends PuzzleComponent {

  constructor() {
    super();

    this.ngForVar = Array(25).fill(0).map((x,i)=>i+1);
    this.board = [];
    this.lvl = 3;
    this.inRow = 5;
   }
}
