import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistmanageComponent } from './bloglistmanage.component';

describe('BloglistmanageComponent', () => {
  let component: BloglistmanageComponent;
  let fixture: ComponentFixture<BloglistmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglistmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
