import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalprofileComponent } from './personalprofile.component';

describe('PersonalprofileComponent', () => {
  let component: PersonalprofileComponent;
  let fixture: ComponentFixture<PersonalprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
