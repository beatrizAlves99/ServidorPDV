import { BancoConectionService } from './../services/banco-conection.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: Array<any>;
  empresa: any;

  constructor(private conection: BancoConectionService) { }

  ngOnInit() {
    this.empresa = {};
    this.conection.listarEmpresa().subscribe(resposta => this.empresas = resposta);
  }

  criarEmpresa(frmEmp: FormGroup) {
    this.conection.criarEmpresa(this.empresa).subscribe(resposta => {
      this.empresas.push(resposta);

      frmEmp.reset();
    });
  }

}
