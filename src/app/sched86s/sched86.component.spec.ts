/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sched86Component } from './sched86.component';

describe('Sched86Component', () => {
  let component: Sched86Component;
  let fixture: ComponentFixture<Sched86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sched86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sched86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
