import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HardPuzzleComponent } from './hard-puzzle.component';


describe('HardPuzzleComponent', () => {
  let component: HardPuzzleComponent;
  let fixture: ComponentFixture<HardPuzzleComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardPuzzleComponent);
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

  it('should have lvl variable with 3', ()=>{
    expect(component.lvl).toBe(3);
  });

  it('should have inRow variable with 5', ()=>{
    expect(component.inRow).toBe(5);
  });

  it('should have 25 elements in board variable after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(component.board.length).toBe(25)
  });

  it('should have div with puzzless and lv3 class in DOM', ()=>{
    expect(de.query(By.css('.puzzles')).nativeElement.className).toBe('puzzles lv3');
  });

  it('should create 25 puzzle div in DOM after calling createPuzzle function', ()=>{
    component.createPuzzle();
    expect(de.query(By.css('.puzzles')).nativeElement.children.length).toBe(25);
  });
});
