import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  postproduct(data: any): Observable<any> {
    return this._http.post<any>("http://localhost:8080/api/products", data)
  }

  getproduct(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/products")
  }

  // Put Method For Update product
  putProduct(data: any, id: number): Observable<any> {
    console.log("azertyui", data);

    return this._http.patch<any>("http://localhost:8080/api/product/:id" + id, data)

  }
  // Delete Method For delete product
  deleteProduct(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/api/product/:id" + id)
  }

  //method to get product by id
  getproductbyId(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8888/products/" + id)
  }


}
