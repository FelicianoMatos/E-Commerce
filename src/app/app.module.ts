import { ProdutoService } from './produtos/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { APP_BASE_HREF } from '@angular/common';
import { DetalhesComponent } from './produtos/detalhes/detalhes.component';

import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';
import { PesquisarComponent } from './navegacao/pesquisar/pesquisar.component';
import { CadastroComponent } from './conta/cadastro/cadastro.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ProdutosComponent,
    ListaProdutoComponent,
    DetalhesComponent,
    CarrinhoComponent,
    PesquisarComponent,
    CadastroComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    

  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
