import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { VeryHardPuzzleComponent } from './very-hard-puzzle.component';

describe('VeryHardPuzzleComponent', () => {
  let component: VeryHardPuzzleComponent;
  let fixture: ComponentFixture<VeryHardPuzzleComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryHardPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryHardPuzzleComponent);
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

  it('should have lvl variable with 4', ()=>{
    expect(component.lvl).toBe(4);
  });

  it('should have inRow variable with 6', ()=>{
    expect(component.inRow).toBe(6);
  });

  it('should have 36 elements in board variable after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(component.board.length).toBe(36)
  });

  it('should have div with puzzless and lv4 class in DOM', ()=>{
    expect(de.query(By.css('.puzzles')).nativeElement.className).toBe('puzzles lv4');
  });

  it('should create 36 puzzle div in DOM after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(de.query(By.css('.puzzles')).nativeElement.children.length).toBe(36);
  });
});
