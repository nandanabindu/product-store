import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddProductComponent} from './add-product/add-product.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private addproduct:AddProductComponent;
  private baseUrl = 'https://sheltered-springs-67444.herokuapp.com/'
  constructor(private http:HttpClient) { }

  getProducts(){
    
    return this.http.get(this.baseUrl +'product');
  }

  getProductDetails(id){
    return this.http.get(this.baseUrl + 'product/' + id);

  }

  postData(data){
    
   return this.http.post(this.baseUrl + 'product' , data).toPromise().then(res =>{
     console.log(res);
   });
  }

  deleteProduct(id){
    return this.http.delete(this.baseUrl + 'product/' + id);
  }
}
