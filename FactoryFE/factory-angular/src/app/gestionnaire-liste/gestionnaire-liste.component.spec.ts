import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireListeComponent } from './gestionnaire-liste.component';

describe('GestionnaireListeComponent', () => {
  let component: GestionnaireListeComponent;
  let fixture: ComponentFixture<GestionnaireListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
