import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any= [];
  product:any= [];
  userConfirm:any;
  isLoading = true;
  isDeleting = [];

  constructor(private productService:ProductService,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(res => {
      this.products = res;
    },err =>{
      console.log(err);
    },()=>{
      this.isLoading = false;
    })
    
  
  }

  deleteItem(id){
     this.userConfirm = confirm("Do you want to delete this product?");
     if(this.userConfirm){
      this.isDeleting[id] = true;
      this.productService.deleteProduct(id)
      .subscribe(res =>{
        this.product = res;
      },err =>{
        console.log(err);
      },()=>{
        window.location.reload();
      })
  }
 
  }



 
}
