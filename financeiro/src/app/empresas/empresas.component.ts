import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BancoConectionService } from './../services/banco-conection.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: Array<any>;
  empresa: any;
  idEmp: any;

  constructor(private conection: BancoConectionService) { }

  ngOnInit() {
    this.empresa = {};
    this.idEmp = 0;
    this.listarEmpresa();
    
  }

  criarEmpresa(frmEmp: FormGroup) {
    this.conection.criarEmpresa(this.empresa).subscribe(resposta => {
      this.empresas.push(resposta);

      frmEmp.reset();
    });
  }

  deletar(frmdel: FormGroup) {
    this.conection.deletarEmpresa(this.empresa).subscribe(resposta => {
      this.empresas.push(resposta);
    });

    frmdel.reset();
  }

  listarEmpresa() {
    this.conection.listarEmpresa().subscribe(resposta => this.empresas = resposta);
  }

}
 