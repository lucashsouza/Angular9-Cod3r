import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto de teste',
    price: 125.69
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    
    // Notificado assim que obtido a resposta
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!");
      this.router.navigate(['/products'])
    }) 
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
