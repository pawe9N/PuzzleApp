import { Component, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-puzzle',
  template: '',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent {
  public firstPiece;
  public secondPiece;
  public board;
  public lvl;
  public inRow;
  public ngForVar;

  @Output() updatePoints = new EventEmitter();

  constructor() { }

  createPuzzle() {
    this.board = [];
    let size = (300 / this.inRow);
    let count = (this.inRow * this.inRow);
    let row = 0, col = 0;

    for (let i = 0; i < count; i++) {
      this.board.push([-row, -col]);
      row += size;
      if (i % this.inRow == this.inRow - 1) {
        col += size;
        row = 0;
      }
    }

    let shuffledBoard = this.shuffleBoard(this.board.slice());

    for (let i = 0; i < count; i++) {
      $('.p' + (i + 1) + 'lv' + this.lvl).css('background-position', shuffledBoard[i][0] + 'px ' + shuffledBoard[i][1] + 'px');
    }
  }

  parsePuzzleLvlFromClass(classes){
    return parseInt(classes.split('lv')[1]);
  }

  clickPuzzle(event){
    if (this.firstPiece == null) {
      this.firstPiece = $(event.target);
      this.markPiece(this.firstPiece);
      $(this.firstPiece).fadeTo('fast', 0.3);
    } else if ($(event.target) != this.firstPiece && $(event.target).width() == $(this.firstPiece).width()) {
      this.secondPiece = $(event.target);
      this.markPiece(this.secondPiece);
    }

    if (this.firstPiece != null && this.secondPiece != null) {
      let imagePos = $(this.firstPiece).css('background-position');
      $(this.firstPiece).css('background-position', $(this.secondPiece).css('background-position'));
      $(this.secondPiece).css('background-position', imagePos);

      $(this.firstPiece).css('border', '1px solid white');
      $(this.secondPiece).css('border', '1px solid white');

      let classes = $(this.firstPiece).attr('class');
      let lvl = this.parsePuzzleLvlFromClass(classes);

      let isMatching = this.isSolved();
      if (isMatching) {
        this.updatePoints.emit(lvl);
        setTimeout(() => {
          this.createPuzzle();
        }, 200);
      }

      $(this.firstPiece).fadeTo( "fast" , 1);

      this.firstPiece = null;
      this.secondPiece = null;
    }
  }

  shuffleBoard(board) {
    for (var i = board.length - 1; i >= 0; i--) {

      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = board[randomIndex];

      board[randomIndex] = board[i];
      board[i] = itemAtIndex;
    }
    return board;
  }

  backgroundPositionOfPuzzle(i){
    return $('.p' + (i + 1) + 'lv' + this.lvl).css('background-position');
  }

  positionOfPuzzleInBoard(i){
    return this.board[i][0] + 'px ' + this.board[i][1] + 'px';
  }

  isSolved() {
    for (let i = 0; i < this.inRow*this.inRow; i++) {
      if ( this.positionOfPuzzleInBoard(i) != this.backgroundPositionOfPuzzle(i)) {
        return false;
      }
    }
    return true;
  }

  oppositeColor(color){
    if(color == 'rgb(255, 255, 255)'){
      return 'black';
    }else{
      return 'white';
    }
  }

  markPiece(piece) {
    $(piece).css('border-color', this.oppositeColor($(piece).css('border-top-color')));
  }

}
