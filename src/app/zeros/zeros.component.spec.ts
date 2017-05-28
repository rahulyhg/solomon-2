/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZerosComponent } from './zeros.component';

describe('ZerosComponent', () => {
  let component: ZerosComponent;
  let fixture: ComponentFixture<ZerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
