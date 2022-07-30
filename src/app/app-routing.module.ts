import { BuscarModule } from './navegacao/buscar/buscar.module';
import { LoginComponent } from './conta/login/login.component';
import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';

import { DetalhesComponent } from './produtos/detalhes/detalhes.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CadastroComponent } from './conta/cadastro/cadastro.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: ListaProdutoComponent},
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: DetalhesComponent },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'login', component: LoginComponent  },
    { path: 'cadastro', component: CadastroComponent  },
    { path: 'buscar', component: BuscarModule  },
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
