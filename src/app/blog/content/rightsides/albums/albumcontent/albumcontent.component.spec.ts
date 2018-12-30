import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumcontentComponent } from './albumcontent.component';

describe('AlbumcontentComponent', () => {
  let component: AlbumcontentComponent;
  let fixture: ComponentFixture<AlbumcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
