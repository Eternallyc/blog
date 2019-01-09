import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdmanageComponent } from './passwdmanage.component';

describe('PasswdmanageComponent', () => {
  let component: PasswdmanageComponent;
  let fixture: ComponentFixture<PasswdmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswdmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswdmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
