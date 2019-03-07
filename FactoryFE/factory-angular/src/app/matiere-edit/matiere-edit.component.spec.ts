import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereEditComponent } from './matiere-edit.component';

describe('MatiereEditComponent', () => {
  let component: MatiereEditComponent;
  let fixture: ComponentFixture<MatiereEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
