import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurListeComponent } from './ordinateur-liste.component';

describe('OrdinateurListeComponent', () => {
  let component: OrdinateurListeComponent;
  let fixture: ComponentFixture<OrdinateurListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
