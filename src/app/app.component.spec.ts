import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { InsanePuzzleComponent } from './insane-puzzle/insane-puzzle.component';
import { DefaultImagesComponent } from './default-images/default-images.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { CookieService } from 'ngx-cookie-service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EasyPuzzleComponent,
        PuzzleComponent,
        MediumPuzzleComponent,
        HardPuzzleComponent,
        InsanePuzzleComponent,
        DefaultImagesComponent,
        PointsTableComponent
      ],
      providers: [
        CookieService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'PuzzleApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PuzzleApp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to PuzzleApp!');
  }));
});
