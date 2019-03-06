import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireListeComponent } from './stagiaire-liste.component';

describe('StagiaireListeComponent', () => {
  let component: StagiaireListeComponent;
  let fixture: ComponentFixture<StagiaireListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiaireListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
