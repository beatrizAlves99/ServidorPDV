import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatosComponent } from './contatos/contatos.component';
import { EmpresasComponent} from './empresas/empresas.component'
import { TarefasComponent } from './tarefas/tarefas.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  }, {
    path: "contatos", component: ContatosComponent
  },
  {
    path: "produtos", component: ProdutosComponent
  },
  {
    path: "empresas", component: EmpresasComponent
  },
  { path: "tarefas", component: TarefasComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
