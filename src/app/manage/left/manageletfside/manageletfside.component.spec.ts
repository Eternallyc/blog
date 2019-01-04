import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageletfsideComponent } from './manageletfside.component';

describe('ManageletfsideComponent', () => {
  let component: ManageletfsideComponent;
  let fixture: ComponentFixture<ManageletfsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageletfsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageletfsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
