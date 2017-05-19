/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DriveprefsComponent } from './driveprefs.component';

describe('DriveprefsComponent', () => {
  let component: DriveprefsComponent;
  let fixture: ComponentFixture<DriveprefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveprefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveprefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
