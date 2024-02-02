import { Component } from "@angular/core";
import { AuthorHttpService } from "src/app/Services/httpauthor.service";
import { Author } from "src/app/models/author.model";

@Component({
    selector: 'author-detail-component',
    templateUrl: './author-detail.component.html',
    styleUrls: ['./author-detail.component.css']
})


export class AuthorDetail{

    constructor(private service: AuthorHttpService){}

    authors: Author[] = [];

    ngOnInit(): void {
        this.getAuthor();  
        
    }

    getAuthor(){
        this.service.getAuthor()
                    .subscribe(auths => {
            this.authors = auths;
        })
    } 

}