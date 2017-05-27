/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LettextComponent } from './lettext.component';

describe('LettextComponent', () => {
  let component: LettextComponent;
  let fixture: ComponentFixture<LettextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
