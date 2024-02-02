import { Injectable } from "@angular/core";
import { Press } from "../models/press.model";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class PressHttpService {

    press: Press[] = [];

    constructor(private http: HttpClient){}

    getPress(){
       return this.http.get<Press[]>('http://localhost:8090/press/find');             

    }
    postPress(press: NgForm){       
        console.log("Dados enviados " + press.value);
        this.http.post('http://localhost:8090/press/save',press).subscribe(response => {console.log(response)});

    }
}    

