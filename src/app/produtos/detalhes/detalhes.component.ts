import { CartService } from 'src/app/cart.service';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';


import { ProdutoService } from '../produtos.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
  
export class DetalhesComponent implements OnInit {

  addToCart(produto: Produto) {
    this.cartService.addToCart(produto)
    window.alert('adicionado')
  }

  produto: Produto | undefined;
   constructor(private route: ActivatedRoute,
              private cartService : CartService) { } 
   

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const produtoIdFromRoute  = Number(routeParams.get('produtoId'))
      
      
  }
    
}

