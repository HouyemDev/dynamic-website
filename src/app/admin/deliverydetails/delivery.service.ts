import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from 'src/app/models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http:HttpClient) { }
  getAll(){
    this.http.get<MyInterface>('http://localhost:5000/comments');
    
  }
}
