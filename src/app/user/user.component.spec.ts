import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';

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

});
