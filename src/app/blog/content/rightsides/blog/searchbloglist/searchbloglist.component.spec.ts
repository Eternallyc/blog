import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbloglistComponent } from './searchbloglist.component';

describe('SearchbloglistComponent', () => {
  let component: SearchbloglistComponent;
  let fixture: ComponentFixture<SearchbloglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbloglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
