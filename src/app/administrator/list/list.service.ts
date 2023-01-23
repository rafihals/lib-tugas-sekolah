import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions : any
  url = '/api/private/api/v1/boilerplate/list-category'

  getDataList (){
    return this.httpClient.get(this.url, this.httpOptions)
  }
}
