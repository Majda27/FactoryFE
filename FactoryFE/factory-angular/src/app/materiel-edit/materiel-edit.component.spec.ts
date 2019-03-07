import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielEditComponent } from './materiel-edit.component';

describe('MaterielEditComponent', () => {
  let component: MaterielEditComponent;
  let fixture: ComponentFixture<MaterielEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
