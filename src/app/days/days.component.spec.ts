/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaysComponent } from './days.component';

describe('DailyComponent', () => {
  let component: DaysComponent;
  let fixture: ComponentFixture<DaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
