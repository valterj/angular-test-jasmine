import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should user the user name from the service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if user is logged in', () => {
    let compiled = fixture.debugElement.nativeElement as HTMLElement;
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain(component.user.name);
  });

  it('shouldn\'t display the user name if user is logged in', () => {
    let compiled = fixture.debugElement.nativeElement as HTMLElement;
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector('p')?.textContent).toContain(component.user.name);
  });

  it('should fetch data succesfully', waitForAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data succesfully with fakeAsync', fakeAsync(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(component.data).toBe('Data');
  }));

});
