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

  it('should have div with puzzle and lv2 class in DOM', ()=>{
    for(let i=1; i<=component.board.length; i++){
      expect(de.query(By.css('.puzzle')).nativeElement.className).toBe('puzzle2 puzzle p'+i+'lv2');
    }
  });

  it('should have ngForVar puzzle divs', () => {
    component.ngForVar.forEach(number =>{
      expect(de.query(By.css('.p'+number+'lv2')).nativeElement.className).toBe('puzzle2 puzzle p'+number+'lv2');
    });
  });
});
