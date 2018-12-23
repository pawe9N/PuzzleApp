import { AchievementsComponent } from './achievements/achievements.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EasyPuzzleComponent } from './easy-puzzle/easy-puzzle.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { MediumPuzzleComponent } from './medium-puzzle/medium-puzzle.component';
import { HardPuzzleComponent } from './hard-puzzle/hard-puzzle.component';
import { InsanePuzzleComponent } from './insane-puzzle/insane-puzzle.component';
import { DefaultImagesComponent } from './default-images/default-images.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import * as $ from 'jquery';

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
        PointsTableComponent,
        AchievementsComponent
      ],
      providers: [
        CookieService
      ],
      imports:[
        ToastrModule.forRoot()
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

  it('should have imageUrl variable not empty', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.imageUrl.length).toBeGreaterThan(0);
  });

  it('should have as imageUrl value link with https', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.imageUrl).toContain('https');
  });

  it('should have "ngOnInit" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.ngOnInit).toBeDefined();
  });

  it('should call "uploadImage" method when keyup with Enter was triggered on ".imageUrlText" after "ngOnInit" was called', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app, 'uploadImage');
    app.ngOnInit();
    var e = $.Event('keyup');
    e.which = 13;
    $('.imageUrlText').trigger(e);
    expect(app.uploadImage).toHaveBeenCalled();
  })

  it(`should not call "uploadImage" method when keyup which wasn't Enter was triggered on ".imageUrlText" after "ngOnInit" was called`, ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app, 'uploadImage');
    app.ngOnInit();
    var e = $.Event('keyup');
    e.which = 1;
    $('.imageUrlText').trigger(e);
    expect(app.uploadImage).not.toHaveBeenCalled();
  })

  it(`should call "uploadImage" method when click was triggered on .uploadImageButton after "ngOnInit" was called`, ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app, 'uploadImage');
    app.ngOnInit();
    var e = $.Event('click');
    $('.uploadImageButton').trigger(e);
    expect(app.uploadImage).toHaveBeenCalled();
  });

  it('should have "uploadImage" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.uploadImage).toBeDefined();
  });

  it('should call "changeImageUrl" method with .imageUrlText value parameter in "uploadImage" method when .imageUrlText is not empty', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    let imageUrlTextValue = 'www.somewebsite.com';
    $('.imageUrlText').val(imageUrlTextValue);
    expect($('.imageUrlText').val()).toBe(imageUrlTextValue);
    spyOn(app, 'changeImageUrl')
    app.uploadImage();
    expect(app.changeImageUrl).toHaveBeenCalledWith(imageUrlTextValue);
  });

  it('should not call "changeImageUrl" method with .imageUrlText value parameter in "uploadImage" method when .imageUrlText is empty', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    let imageUrlTextValue = '';
    $('.imageUrlText').val(imageUrlTextValue);
    expect($('.imageUrlText').val()).toBe(imageUrlTextValue);
    spyOn(app, 'changeImageUrl')
    app.uploadImage();
    expect(app.changeImageUrl).not.toHaveBeenCalledWith(imageUrlTextValue);
  });

  it('should change .imageUrlText value to empty string in "uploadImage" method when .imageUrlText is not empty', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    $('.imageUrlText').val('not empty');
    expect($('.imageUrlText').val()).not.toBe('');
    app.uploadImage();
    expect($('.imageUrlText').val()).toBe('');
  });

  it('should have "choosePuzzleLevelToCreate" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.choosePuzzleLevelToCreate).toBeDefined();
  });

  it('should call "choosePuzzleLevelToCreate" method after calling ngOnInit and clicking in lvlChooser', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const debug = fixture.debugElement;

    spyOn(debug.componentInstance, 'choosePuzzleLevelToCreate');
    debug.componentInstance.ngOnInit();
    debug.nativeElement.querySelector('.lvlChooser').click();
    expect(debug.componentInstance.choosePuzzleLevelToCreate).toHaveBeenCalled();
  } )

  it('should call "createPuzzle" method from easyPuzzle after calling "choosePuzzleLevelToCreate" when Easy difficulty level is chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.choosedLvl = 1;

    spyOn(app.easyPuzzle, 'createPuzzle');
    app.choosePuzzleLevelToCreate();
    expect(app.easyPuzzle.createPuzzle).toHaveBeenCalled();
  });

  it('should call "createPuzzle" method from mediumPuzzle after calling "choosePuzzleLevelToCreate" when Medium difficulty level is chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.choosedLvl = 2;

    spyOn(app.mediumPuzzle, 'createPuzzle');
    app.choosePuzzleLevelToCreate();
    expect(app.mediumPuzzle.createPuzzle).toHaveBeenCalled();
  });

  it('should call "createPuzzle" method from hardPuzzle after calling "choosePuzzleLevelToCreate" when Hard difficulty level is chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.choosedLvl = 3;

    spyOn(app.hardPuzzle, 'createPuzzle');
    app.choosePuzzleLevelToCreate();
    expect(app.hardPuzzle.createPuzzle).toHaveBeenCalled();
  });

  it('should call "createPuzzle" method from insanePuzzle after calling "choosePuzzleLevelToCreate" when Insane difficulty level is chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.choosedLvl = 4;

    spyOn(app.insanePuzzle, 'createPuzzle');
    app.choosePuzzleLevelToCreate();
    expect(app.insanePuzzle.createPuzzle).toHaveBeenCalled();
  });

  it('should have "badImageUrl" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.badImageUrl).toBeDefined();
  });

  it('should call "error" method from toastr when "badImageUrl" method was called', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app.toastr, 'error');
    app.badImageUrl();
    expect(app.toastr.error).toHaveBeenCalled();
  });

  it('should change "imageUrl" variable when "badImageUrl" method was called', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let previousValue = app.imageUrl;
    app.badImageUrl();
    expect(app.imageUrl).not.toBe(previousValue);
  });

  it('should have "changeImageUrl" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.changeImageUrl).toBeDefined();
  });

  it('should set "imageUrl" variable to new value when "changeImageUrl" method was called', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    let newValue = 'new value';
    app.changeImageUrl(newValue);
    expect(app.imageUrl).toBe(newValue);
  });

  it('should call "choosePuzzleLevelToCreate" method after calling changeImageUrl', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const debug = fixture.debugElement;

    spyOn(debug.componentInstance, 'choosePuzzleLevelToCreate');
    debug.componentInstance.changeImageUrl("");
    expect(debug.componentInstance.choosePuzzleLevelToCreate).toHaveBeenCalled();
  });

  it('should have "updateCookie" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.updateCookie).toBeDefined();
  });

  it('should call "updateCookie" method from points-table in "updateCookie" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    spyOn(app.pointsTable, 'updateCookie');
    let param = '';
    app.updateCookie(param);
    expect(app.pointsTable.updateCookie).toHaveBeenCalled();
  });

  it('should call "run" method from zone in "updateCookie" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    spyOn(app.zone, 'run');
    let param = '';
    app.updateCookie(param);
    expect(app.zone.run).toHaveBeenCalled();
  });

  it('should have "showSuccessToastr" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.showSuccessToastr).toBeDefined();
  });

  it('should call "showSuccessToastr" method in "updateCookie" method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    spyOn(app, 'showSuccessToastr');
    let param = '';
    app.updateCookie(param);
    expect(app.showSuccessToastr).toHaveBeenCalled();
  });

  it('should call "info" method from toastr in "showSuccessToastr" method when "updateAchievments" method  from achievements returns true', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app.achievements, 'updateAchievements').and.returnValue(true);
    spyOn(app.toastr, 'info');
    let param = '';
    app.showSuccessToastr(param);
    expect(app.toastr.info).toHaveBeenCalled();
  });

  it('should call "info" method from toastr with "`You earned an achievement!" parameter in "showSuccessToastr" method when "updateAchievments" method  from achievements returns true', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app.achievements, 'updateAchievements').and.returnValue(true);
    spyOn(app.toastr, 'info');
    let successToastrParameter = '';
    let infoMessage = 'You earned an achievement!';
    app.showSuccessToastr(successToastrParameter);
    expect(app.toastr.info).toHaveBeenCalledWith(infoMessage);
  });

  it('should call "success" method from toastr with "You solved easy puzzle!" parameter in "showSuccessToastr" method when Easy difficulty level was chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app.toastr, 'success');
    let puzzleLvl = 1;
    let successMessage = 'You solved easy puzzle!';
    app.showSuccessToastr(puzzleLvl);
    expect(app.toastr.success).toHaveBeenCalledWith(successMessage);
  });

  it('should call "success" method from toastr with "You solved medium puzzle!" parameter in "showSuccessToastr" method when Medium difficulty level was chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app.toastr, 'success');
    let puzzleLvl = 2;
    let successMessage = 'You solved medium puzzle!';
    app.showSuccessToastr(puzzleLvl);
    expect(app.toastr.success).toHaveBeenCalledWith(successMessage);
  });

  it('should call "success" method from toastr with "You solved hard puzzle!" parameter in "showSuccessToastr" method when Hard difficulty level was chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app.toastr, 'success');
    let puzzleLvl = 3;
    let successMessage = 'You solved hard puzzle!';
    app.showSuccessToastr(puzzleLvl);
    expect(app.toastr.success).toHaveBeenCalledWith(successMessage);
  });

  it('should call "success" method from toastr with "You solved insane puzzle!" parameter in "showSuccessToastr" method when Insane difficulty level was chosen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app.toastr, 'success');
    let puzzleLvl = 4;
    let successMessage = 'You solved insane puzzle!';
    app.showSuccessToastr(puzzleLvl);
    expect(app.toastr.success).toHaveBeenCalledWith(successMessage);
  });






});