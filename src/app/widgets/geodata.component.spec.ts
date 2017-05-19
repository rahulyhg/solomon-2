/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeodataComponent } from './geodata.component';

describe('GeodataComponent', () => {
  let component: GeodataComponent;
  let fixture: ComponentFixture<GeodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
