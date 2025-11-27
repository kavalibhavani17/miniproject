import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 constructor(private activatedRoute: ActivatedRoute){
  activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
    }
  )
 }
  
}
