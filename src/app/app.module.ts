import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { VeryHardPuzzleComponent } from './very-hard-puzzle/very-hard-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyPuzzleComponent,
    MediumPuzzleComponent,
    HardPuzzleComponent,
    VeryHardPuzzleComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
