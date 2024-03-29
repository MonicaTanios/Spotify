import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPage } from './genres.page';

describe('GenresPage', () => {
  let component: GenresPage;
  let fixture: ComponentFixture<GenresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenresPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
