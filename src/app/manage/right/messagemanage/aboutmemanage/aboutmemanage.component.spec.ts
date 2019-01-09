import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmemanageComponent } from './aboutmemanage.component';

describe('AboutmemanageComponent', () => {
  let component: AboutmemanageComponent;
  let fixture: ComponentFixture<AboutmemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
