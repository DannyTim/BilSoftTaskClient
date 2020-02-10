import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service : ProductService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(prod : Product){
    this.service.formData = Object.assign({},prod);
  }

  onDelete(id : number){
    if(confirm('Are you sure to delete this product?')) {
      this.service.deleteProduct(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }
}
