import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoggingService } from "../Services/Logging.service";
import { AuthorHttpService } from "../Services/httpauthor.service";

@Component({
    selector: 'author-component',
    templateUrl: './author.component.html',
    styleUrls:['./author.component.css']

})

export class AuthorComponent {

    pagetitle: String = "Gerenciamento de Autores";

    

    constructor(private logService: LoggingService, private athService: AuthorHttpService){}

  
  
    ngOnInit(){
        this.onGetAuthor();
    }     

    onCreatePost(author: NgForm){    
      this.athService.postAuthor(author);
      this.onGetAuthor();
    }

    onGetAuthor(){
        this.athService.getAuthor();
    }    

}