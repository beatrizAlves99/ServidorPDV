import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BancoConectionService } from './services/banco-conection.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    RegistrarComponent,
    EmpresasComponent,
    ContatosComponent,
    ProdutosComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [BancoConectionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
