import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleListeComponent } from './module-liste.component';

describe('ModuleListeComponent', () => {
  let component: ModuleListeComponent;
  let fixture: ComponentFixture<ModuleListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
