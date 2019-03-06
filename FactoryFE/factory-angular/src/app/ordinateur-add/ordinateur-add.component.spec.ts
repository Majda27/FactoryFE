import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurAddComponent } from './ordinateur-add.component';

describe('OrdinateurAddComponent', () => {
  let component: OrdinateurAddComponent;
  let fixture: ComponentFixture<OrdinateurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
