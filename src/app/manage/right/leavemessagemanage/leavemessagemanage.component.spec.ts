import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemessagemanageComponent } from './leavemessagemanage.component';

describe('LeavemessagemanageComponent', () => {
  let component: LeavemessagemanageComponent;
  let fixture: ComponentFixture<LeavemessagemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavemessagemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemessagemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
