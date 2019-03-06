import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurListeComponent } from './formateur-liste.component';

describe('FormateurListeComponent', () => {
  let component: FormateurListeComponent;
  let fixture: ComponentFixture<FormateurListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
