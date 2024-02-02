import { HttpClient } from "@angular/common/http";
import { Injectable, Output } from "@angular/core";
import { Category } from "../models/category.model";
import { NgForm } from "@angular/forms";
import { LoggingService } from "./Logging.service";

@Injectable({providedIn: 'root'})
export class CategoryHttpService {

    categories: Category[] = [];

    constructor(private http: HttpClient){}

    getCategory(){
       return this.http.get<Category[]>('http://localhost:8090/category/find');             

    }
    postCategory(category: NgForm){
        console.log(category.value)
        this.http.post('http://localhost:8090/category/save',category.value).subscribe(response => {console.log(response)});
    }

    deleteCategoryByCodigo(codigo: String){        
        this.http.delete(`http://localhost:8090/category/delete/${codigo}`)
                 .subscribe()         ;               
        this.getCategory()         
    }



}