import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefooterComponent } from './managefooter.component';

describe('ManagefooterComponent', () => {
  let component: ManagefooterComponent;
  let fixture: ComponentFixture<ManagefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
