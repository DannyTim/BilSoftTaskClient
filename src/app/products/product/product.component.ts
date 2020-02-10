import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/shared/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categoryList : Category[];


  constructor(public service : ProductService,
    public categoryService: CategoryService) { }

  ngOnInit() {
    this.resetForm();

    this.categoryService.getCategoryList().then(res => this.categoryList = res as Category[]);
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      Id : null,
      Name : '',
      Category : ''
    }
  }


  onSubmit(form : NgForm){
    if(form.value.Id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postProduct(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form : NgForm){
    this.service.putProduct(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
