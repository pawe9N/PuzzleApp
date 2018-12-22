import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { InsanePuzzleComponent } from './insane-puzzle.component';

describe('InsanePuzzleComponent', () => {
  let component: InsanePuzzleComponent;
  let fixture: ComponentFixture<InsanePuzzleComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsanePuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsanePuzzleComponent);
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

  it('should have div with puzzle and lv4 class in DOM', ()=>{
    for(let i=1; i<=component.board.length; i++){
      expect(de.query(By.css('.puzzle')).nativeElement.className).toContain('puzzle4 puzzle p'+i+'lv4');
    }
  });

  it('should have ngForVar puzzle divs', () => {
    component.ngForVar.forEach(number =>{
      expect(de.query(By.css('.p'+number+'lv4')).nativeElement.className).toContain('puzzle4 puzzle p'+number+'lv4');
    });
  });
});
