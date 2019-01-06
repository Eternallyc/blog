import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistmanagesecondaryComponent } from './bloglistmanagesecondary.component';

describe('BloglistmanagesecondaryComponent', () => {
  let component: BloglistmanagesecondaryComponent;
  let fixture: ComponentFixture<BloglistmanagesecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglistmanagesecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistmanagesecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
