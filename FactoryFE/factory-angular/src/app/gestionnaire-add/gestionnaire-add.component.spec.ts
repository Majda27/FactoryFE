import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireAddComponent } from './gestionnaire-add.component';

describe('GestionnaireAddComponent', () => {
  let component: GestionnaireAddComponent;
  let fixture: ComponentFixture<GestionnaireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
