import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteblogComponent } from './writeblog.component';

describe('WriteblogComponent', () => {
  let component: WriteblogComponent;
  let fixture: ComponentFixture<WriteblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
