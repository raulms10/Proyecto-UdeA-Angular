import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarVillanosComponent } from './ingresar-villanos.component';

describe('IngresarVillanosComponent', () => {
  let component: IngresarVillanosComponent;
  let fixture: ComponentFixture<IngresarVillanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarVillanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarVillanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
