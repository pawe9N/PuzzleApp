import { Component } from '@angular/core';
import { PuzzleComponent } from '../puzzle/puzzle.component';

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
}
