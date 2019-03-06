import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojecteurAddComponent } from './videoprojecteur-add.component';

describe('VideoprojecteurAddComponent', () => {
  let component: VideoprojecteurAddComponent;
  let fixture: ComponentFixture<VideoprojecteurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojecteurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojecteurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
