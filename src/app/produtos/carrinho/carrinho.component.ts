import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Produto } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items: Produto[] = []

  

  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

}
