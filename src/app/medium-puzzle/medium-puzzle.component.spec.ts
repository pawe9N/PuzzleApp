import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MediumPuzzleComponent } from './medium-puzzle.component';

describe('MediumPuzzleComponent', () => {
  let component: MediumPuzzleComponent;
  let fixture: ComponentFixture<MediumPuzzleComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPuzzleComponent);
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

  it('should have lvl variable with 2', ()=>{
    expect(component.lvl).toBe(2);
  });

  it('should have inRow variable with 4', ()=>{
    expect(component.inRow).toBe(4);
  });

  it('should have 16 elements in board variable after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(component.board.length).toBe(16)
  });

  it('should have div with puzzless and lv2 class in DOM', ()=>{
    expect(de.query(By.css('.puzzles')).nativeElement.className).toBe('puzzles lv2');
  });

  it('should create 16 puzzle div in DOM after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(de.query(By.css('.puzzles')).nativeElement.children.length).toBe(16);
  });
});
