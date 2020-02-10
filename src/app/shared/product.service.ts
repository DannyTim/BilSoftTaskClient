import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData : Product;
  list : Product[];
  readonly rootURL = "http://localhost:55035/api";

  constructor(private http : HttpClient) { }

  postProduct(formData : Product){
    return this.http.post(this.rootURL + '/Product', formData);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Product')
    .toPromise().then(res => this.list = res as Product[]);
  }

  putProduct(formData : Product){
    return this.http.put(this.rootURL + '/Product/' + formData.Id, formData);
  }

  deleteProduct(id : number){
    return this.http.delete(this.rootURL + '/Product/' + id);
  }
}
