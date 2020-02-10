import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly rootURL = "http://localhost:55035/api";

  constructor(private http : HttpClient) { }

  getCategoryList(){
    return this.http.get(this.rootURL + '/Category').toPromise();
  }
}
