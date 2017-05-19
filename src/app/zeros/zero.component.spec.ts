/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZeroComponent } from './zero.component';

describe('ZeroComponent', () => {
  let component: ZeroComponent;
  let fixture: ComponentFixture<ZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
