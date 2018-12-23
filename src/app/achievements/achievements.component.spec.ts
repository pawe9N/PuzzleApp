import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { AchievementsComponent } from './achievements.component';

describe('AchievmentsComponent', () => {
  let component: AchievementsComponent;
  let fixture: ComponentFixture<AchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsComponent ],
      imports: [ToastrModule.forRoot(),]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ngOnInit method', ()=>{
    expect(component.ngOnInit).toBeDefined();
  });

  it('should have initAchievments method', ()=>{
    expect(component.initAchievments).toBeDefined();
  });

  it('should have updateAchievements method', ()=>{
    expect(component.updateAchievements).toBeDefined();
  });
  
  it('should call "get" method from cookieService in "updateAchievements" method', ()=>{
    spyOn(component['cookieService'], 'get');
    component.updateAchievements();
    expect(component['cookieService'].get).toHaveBeenCalled();
  });

  it('should "updateAchievements" method returns true when cookieService has field with value which (value%3=1) and this field is not equal field from points array', ()=>{
    component['points'] = ['0', '0', '0', '0'];
    spyOn(component['cookieService'], 'get').and.returnValue('1');
    let result = component.updateAchievements();
    expect(result).toBeTruthy();
  });

  it('should "updateAchievements" method returns false when cookieService has not field with value which (value%3=1) and this field is not equal field from points array', ()=>{
    component['points'] = ['0', '0', '0', '0'];
    spyOn(component['cookieService'], 'get').and.returnValue('2');
    let result = component.updateAchievements();
    expect(result).toBeFalsy();
  });

  it('should "updateAchievements" method returns false when cookieService has field with value which (value%3=1) and this field is equal field from points array', ()=>{
    component['points'] = ['4', '4', '4', '4'];
    spyOn(component['cookieService'], 'get').and.returnValue('4');
    let result = component.updateAchievements();
    expect(result).toBeFalsy();
  });

  




});
