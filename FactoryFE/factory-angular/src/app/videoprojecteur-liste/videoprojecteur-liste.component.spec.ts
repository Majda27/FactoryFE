import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojecteurListeComponent } from './videoprojecteur-liste.component';

describe('VideoprojecteurListeComponent', () => {
  let component: VideoprojecteurListeComponent;
  let fixture: ComponentFixture<VideoprojecteurListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojecteurListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojecteurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
