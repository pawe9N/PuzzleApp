import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { InsanePuzzleComponent } from './insane-puzzle/insane-puzzle.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { DefaultImagesComponent } from './default-images/default-images.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyPuzzleComponent,
    MediumPuzzleComponent,
    HardPuzzleComponent,
    InsanePuzzleComponent,
    PointsTableComponent,
    DefaultImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
