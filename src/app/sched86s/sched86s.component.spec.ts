/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sched86sComponent } from './sched86s.component';

describe('Sched86sComponent', () => {
  let component: Sched86sComponent;
  let fixture: ComponentFixture<Sched86sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sched86sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sched86sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
