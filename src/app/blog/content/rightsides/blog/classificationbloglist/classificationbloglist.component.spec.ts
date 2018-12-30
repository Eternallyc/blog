import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationbloglistComponent } from './classificationbloglist.component';

describe('ClassificationbloglistComponent', () => {
  let component: ClassificationbloglistComponent;
  let fixture: ComponentFixture<ClassificationbloglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationbloglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationbloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
