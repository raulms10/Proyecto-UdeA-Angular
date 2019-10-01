import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVillanosComponent } from './lista-villanos.component';

describe('ListaVillanosComponent', () => {
  let component: ListaVillanosComponent;
  let fixture: ComponentFixture<ListaVillanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVillanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVillanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
