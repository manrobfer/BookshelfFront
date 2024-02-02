import { Component, ElementRef, ViewChild , OnInit } from "@angular/core";
import { Category } from "../models/category.model";
import { NgForm } from "@angular/forms";
import { LoggingService } from "../Services/Logging.service";
import { CategoryHttpService } from "../Services/httpcategory.service";

@Component({
    selector: 'Category-Component' ,
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
    providers: [LoggingService]

})

export class CategoryComponent implements OnInit {

    constructor(private logService: LoggingService, private hcService: CategoryHttpService){}

  
    title: String = 'Controle de categorias'
    defaultQuestion = "sec";

    ngOnInit(){
        this.onGetCategory();
    }     

    onCreatePost(category: NgForm){            
      this.hcService.postCategory(category);
      window.location.reload();
    }

    onGetCategory(){
        this.hcService.getCategory();
    }    

   
   
   
   
}
