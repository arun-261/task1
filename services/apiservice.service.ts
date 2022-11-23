import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private httpclient: HttpClient) {
  }
  getdummy(){
   return this.httpclient.get("http://localhost:3000/users")
    }
    // getAdress(id:any){
    //   return this.httpclient.get("http://localhost:3000/users/"+id)
    //    }
   
}
