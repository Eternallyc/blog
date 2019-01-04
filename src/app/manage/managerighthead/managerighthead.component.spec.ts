import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerightheadComponent } from './managerighthead.component';

describe('ManagerightheadComponent', () => {
  let component: ManagerightheadComponent;
  let fixture: ComponentFixture<ManagerightheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerightheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerightheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
