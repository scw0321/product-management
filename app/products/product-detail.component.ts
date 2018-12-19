import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage = '';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router, 
    private productService: ProductService){
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    const theId = this.route.snapshot.paramMap.get('id'); 
    if(theId){
      let id = +theId;
      this.getProduct(id);
      this.pageTitle += `: ${id}`;
    }
    
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error)
  }
  onBack(): void{
    this.router.navigate(['./products']);
  }
}

  


