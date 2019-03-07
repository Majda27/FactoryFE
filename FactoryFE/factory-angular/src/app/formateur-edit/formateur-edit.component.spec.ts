import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurEditComponent } from './formateur-edit.component';

describe('FormateurEditComponent', () => {
  let component: FormateurEditComponent;
  let fixture: ComponentFixture<FormateurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
