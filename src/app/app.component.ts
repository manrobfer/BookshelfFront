import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BooksFrontEnd'; 

  message = "Welcome to this app"

  books: string[] = ["Desejado","Patriarca","Reis","Atos","Conflito"];  


 insertMethod(){
     this.books.push("Minha lista");
 }

}
