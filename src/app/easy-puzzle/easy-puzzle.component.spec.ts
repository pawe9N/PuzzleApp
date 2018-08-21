import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EasyPuzzleComponent } from './easy-puzzle.component';

describe('EasyPuzzleComponent', () => {
  let component: EasyPuzzleComponent;
  let fixture: ComponentFixture<EasyPuzzleComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyPuzzleComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have board variable with empty value', ()=>{
    expect(component.board.length).toBe(0);
  });

  it('should have lvl variable with 1', ()=>{
    expect(component.lvl).toBe(1);
  });

  it('should have inRow variable with 3', ()=>{
    expect(component.inRow).toBe(3);
  });

  it('should have 9 elements in board variable after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(component.board.length).toBe(9)
  });

  it('should have div with puzzless and lv1 class in DOM', ()=>{
    expect(de.query(By.css('.puzzles')).nativeElement.className).toBe('puzzles lv1');
  });

  it('should create 9 puzzle div in DOM after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(de.query(By.css('.puzzles')).nativeElement.children.length).toBe(9);
  });
});
