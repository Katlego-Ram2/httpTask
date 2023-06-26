import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceServiceService {
 
  url:any="https://api.agify.io?name=katlego"
  constructor(private httpA: HttpClient) { }

  getName():Observable<any>{
    return this.httpA.get(this.url);

  }
}