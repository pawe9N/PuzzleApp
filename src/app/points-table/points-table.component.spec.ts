import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { PointsTableComponent } from './points-table.component';

describe('PointsTableComponent', () => {
  let component: PointsTableComponent;
  let fixture: ComponentFixture<PointsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsTableComponent ],
      providers: [CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cookieNames array with length 4', () =>{
    expect(component.cookieNames.length).toBe(4);
  });

  it('should have "ngOnInit" method', ()=>{
    expect(component.ngOnInit).toBeDefined();
  });

  it('should have "initCookiePuzzleLevelPoints" method', ()=>{
    expect(component.initCookiePuzzleLevelPoints).toBeDefined();
  });

  it('should have "initCookies" method', ()=>{
    expect(component.initCookies).toBeDefined();
  });

  it('should have "setAllPoints" method', ()=>{
    expect(component.setAllPoints).toBeDefined();
  });

  it('should have "updateCookie" method', ()=>{
    expect(component.updateCookie).toBeDefined();
  });

  it('should call "initCookies" method in "ngOnInit" method', ()=>{
    spyOn(component, 'initCookies');
    component.ngOnInit();
    expect(component.initCookies).toHaveBeenCalled();
  });

  it('should call "setAllPoints" method in "ngOnInit" method', ()=>{
    spyOn(component, 'setAllPoints');
    component.ngOnInit();
    expect(component.setAllPoints).toHaveBeenCalled();
  });
  
  it('should call "check" method from cookieService in "initCookiePuzzleLevelPoints" method', ()=>{
    spyOn(component['cookieService'], 'check');
    component.initCookiePuzzleLevelPoints('easy-level-points');
    expect(component['cookieService'].check).toHaveBeenCalled();
  });

  it('should call "initCookiePuzzleLevelPoints" method in "initCookies" method', ()=>{
    spyOn(component, 'initCookiePuzzleLevelPoints');
    component.initCookies();
    expect(component.initCookiePuzzleLevelPoints).toHaveBeenCalled();
  });

  it('should call "get" method from cookieService in "setAllPoints" method', ()=>{
    spyOn(component['cookieService'], 'get');
    component.setAllPoints();
    expect(component['cookieService'].get).toHaveBeenCalled();
  });

  it('should call "set" method from cookieService in "updateCookie" method', ()=>{
    spyOn(component['cookieService'], 'set');
    component.updateCookie(1);
    expect(component['cookieService'].set).toHaveBeenCalled();
  });

  it('should call "setAllPoints" method in "updateCookie" method', ()=>{
    spyOn(component, 'setAllPoints');
    component.updateCookie(1);
    expect(component.setAllPoints).toHaveBeenCalled();
  });

  it('should call "get" method from cookieService in "updateCookie" method', ()=>{
    spyOn(component['cookieService'], 'get');
    component.updateCookie(1);
    expect(component['cookieService'].get).toHaveBeenCalled();
  });



});
