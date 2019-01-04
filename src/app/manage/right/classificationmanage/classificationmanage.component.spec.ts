import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationmanageComponent } from './classificationmanage.component';

describe('ClassificationmanageComponent', () => {
  let component: ClassificationmanageComponent;
  let fixture: ComponentFixture<ClassificationmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
