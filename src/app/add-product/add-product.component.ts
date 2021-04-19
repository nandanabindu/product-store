import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';  

import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  additemFormGroup:FormGroup;
  constructor(private productService:ProductService,private formbuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
   
    this.additemFormGroup = this.formbuilder.group({
      
      title: ["", Validators.required],
      imageUrl:["", Validators.required],
      description:["", Validators.required],

    })
    
 
  }
  addItem(){
    
    this.productService.postData(this.additemFormGroup.value);
    alert("item added successfully");

    window.location.reload();
    
    } 

    
  }
 
  
