import { Injectable } from "@angular/core";
import { Author } from "../models/author.model";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class AuthorHttpService {

    authors: Author[] = [];

    constructor(private http: HttpClient){}

    getAuthor(){
       return this.http.get<Author[]>('http://localhost:8090/author/find');             

    }
    postAuthor(author: NgForm){
       
        this.http.post('http://localhost:8090/author/save',author.value).subscribe(response => {console.log(response)});

    }



}