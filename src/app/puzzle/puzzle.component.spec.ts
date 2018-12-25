import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import * as $ from 'jquery';
import { PuzzleComponent } from './puzzle.component';
import { DebugElement } from '@angular/core';

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ PuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "createPuzzle" method', ()=>{
    expect(component.createPuzzle).toBeDefined();
  });

  it('should have "parsePuzzleLvlFromClass" method', ()=>{
    expect(component.parsePuzzleLvlFromClass).toBeDefined();
  });

  it('should "parsePuzzleLvlFromClass" method with puzzle1.puzzle.p4lv1.ml-1 returns 1', async()=>{
    expect(component.parsePuzzleLvlFromClass('puzzle1.puzzle.p4lv1.ml-1')).toBe(1);
  });

  it('should have "clickPuzzle" method', ()=>{
    expect(component.clickPuzzle).toBeDefined();
  });

  it('should call "markPiece" method with event.target argument after calling "clickPuzzle" method when firstPiece is null', ()=>{
    component.firstPiece = null;
    spyOn(component, 'markPiece');
    let event = {
      type: 'click',
      target: 'target',
      stopPropagation: function(){}
    }
    component.clickPuzzle(event);

    expect(component.markPiece).toHaveBeenCalledWith($(event.target));
  });

  it('should call "markPiece" with event.target argument after calling "clickPuzzle" when firstPiece is not event.target and secondPiece is not null', ()=>{
    component.firstPiece = $('div.puzzle1.puzzle.p4lv1.ml-1');
    component.secondPiece = $('div.puzzle1.puzzle.p5lv1.ml-1');
    spyOn(component, 'markPiece');
    spyOn(component, 'parsePuzzleLvlFromClass').and.returnValue(1);
    let event = {
      type: 'click',
      target: $('div.puzzle1.puzzle.p5lv1.ml-1'),
      stopPropagation: function(){}
    }
    component.clickPuzzle(event);

    expect(component.markPiece).toHaveBeenCalledWith($(event.target));
  });

  it('should not call "emit" from updatePoints when "isSolved" method returns false in "clickPuzzle" method when firstPiece != null and secondPiece != null', ()=>{
    component.firstPiece = $('div.puzzle1.puzzle.p4lv1.ml-1');
    component.secondPiece = $('div.puzzle1.puzzle.p5lv1.ml-1');
    spyOn(component.updatePoints, 'emit');
    spyOn(component, 'parsePuzzleLvlFromClass').and.returnValue(1);
    spyOn(component, 'isSolved').and.returnValue(false);
    let event = {
      type: 'click',
      target: $('div.puzzle1.puzzle.p5lv1.ml-1'),
      stopPropagation: function(){}
    }
    component.clickPuzzle(event);

    expect(component.updatePoints.emit).not.toHaveBeenCalled();
  });

  it('should not call "parsePuzzleLvlFromClass" method after calling "clickPuzzle" method when firstPiece width is not equal target width', ()=>{
    component.firstPiece = $(document);
    $(component.firstPiece).width('100px');
    spyOn(component, 'parsePuzzleLvlFromClass');
    let event = {
      type: 'click',
      target: null,
      stopPropagation: function(){}
    }
    component.clickPuzzle(event);

    expect(component.parsePuzzleLvlFromClass).not.toHaveBeenCalled();
  });

  it('should have "backgroundPositionOfPuzzle" method', ()=>{
    expect(component.backgroundPositionOfPuzzle).toBeDefined();
  });

  it('should have "positionOfPuzzleInBoard" method', ()=>{
    expect(component.positionOfPuzzleInBoard).toBeDefined();
  });

  it('should have "isSolved" method', ()=>{
    expect(component.isSolved).toBeDefined();
  });

  it('should "isSolved" method returns false when board[i][0] + board[i][1] != image background-position', ()=>{
    component.board = [];
    component.inRow = 3;
    component.createPuzzle();

    expect(component.isSolved()).toBeFalsy();
  });

  it('should "isSolved" method returns true when board[i][0] + board[i][1] = image background-position', ()=>{
    component.board = [];
    component.inRow = 3;
    spyOn(component, 'backgroundPositionOfPuzzle').and.returnValue(undefined);
    spyOn(component, 'positionOfPuzzleInBoard').and.returnValue(undefined);
    component.createPuzzle();

    expect(component.isSolved()).toBeTruthy();
  });

  it('should have "oppositeColor" method', ()=>{
    expect(component.oppositeColor).toBeDefined();
  });

  it('should "oppositeColor" method return white when parameter was not rgb(255, 255, 255)', ()=>{
    expect(component.oppositeColor('rgb(0, 0, 0)')).toBe('white');
  });

  it('should "oppositeColor" method return black when parameter was rgb(255, 255, 255)', ()=>{
    expect(component.oppositeColor('rgb(255, 255, 255)')).toBe('black');
  });

  it('should have "markPiece" method', ()=>{
    expect(component.markPiece).toBeDefined();
    component.markPiece('');
  });

});