import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepageComponent } from './managepage.component';

describe('ManagepageComponent', () => {
  let component: ManagepageComponent;
  let fixture: ComponentFixture<ManagepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
