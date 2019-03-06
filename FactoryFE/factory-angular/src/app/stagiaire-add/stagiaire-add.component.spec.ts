import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireAddComponent } from './stagiaire-add.component';

describe('StagiaireAddComponent', () => {
  let component: StagiaireAddComponent;
  let fixture: ComponentFixture<StagiaireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiaireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
