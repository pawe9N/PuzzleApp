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
});
