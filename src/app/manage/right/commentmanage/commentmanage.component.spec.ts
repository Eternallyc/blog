import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentmanageComponent } from './commentmanage.component';

describe('CommentmanageComponent', () => {
  let component: CommentmanageComponent;
  let fixture: ComponentFixture<CommentmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
