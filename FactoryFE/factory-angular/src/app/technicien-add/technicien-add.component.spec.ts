import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienAddComponent } from './technicien-add.component';

describe('TechnicienAddComponent', () => {
  let component: TechnicienAddComponent;
  let fixture: ComponentFixture<TechnicienAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicienAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicienAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
