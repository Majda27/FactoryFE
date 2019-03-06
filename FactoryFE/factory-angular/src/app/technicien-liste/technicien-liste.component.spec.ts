import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienListeComponent } from './technicien-liste.component';

describe('TechnicienListeComponent', () => {
  let component: TechnicienListeComponent;
  let fixture: ComponentFixture<TechnicienListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicienListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicienListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
