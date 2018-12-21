import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemessageComponent } from './leavemessage.component';

describe('LeavemessageComponent', () => {
  let component: LeavemessageComponent;
  let fixture: ComponentFixture<LeavemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
