import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaListagemComponent } from './venda-listagem.component';

describe('VendaListagemComponent', () => {
  let component: VendaListagemComponent;
  let fixture: ComponentFixture<VendaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
