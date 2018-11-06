import { Component, OnInit } from '@angular/core';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-listagem',
  templateUrl: './venda-listagem.component.html',
  styleUrls: ['./venda-listagem.component.scss']
})
export class VendaListagemComponent implements OnInit {

  vendas: Array<any>;

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.vendaService.listar()
      .subscribe(response => this.vendas = response);
  }

}
