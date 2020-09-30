import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<any>{
    return this.httpClient.get('http://localhost:4200/assets/products.json')
  }
}
