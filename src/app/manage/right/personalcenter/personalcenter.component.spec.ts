import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcenterComponent } from './personalcenter.component';

describe('PersonalcenterComponent', () => {
  let component: PersonalcenterComponent;
  let fixture: ComponentFixture<PersonalcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
