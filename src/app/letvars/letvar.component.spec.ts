/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetvarComponent } from './letvar.component';

describe('LetvarComponent', () => {
  let component: LetvarComponent;
  let fixture: ComponentFixture<LetvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
