import { Component, OnInit } from "@angular/core";
import { CategoryHttpService } from "src/app/Services/httpcategory.service";
import { Category } from "../../models/category.model";

@Component({
    selector: 'category-detail-component',
    templateUrl: './categorydetail.component.html',
    styleUrls: ['./categorydetail.component.css']
})

export class CategoryDetail  implements OnInit  {
    constructor(private service: CategoryHttpService){}

    categories: Category[] = [];

    ngOnInit(): void {
        this.getCategories();  
        
    }
    delete(codigo: String){
        this.service.deleteCategoryByCodigo(codigo);
        window.location.reload();
    }

    getCategories(){
        this.service.getCategory()
                    .subscribe(cats => {
            this.categories = cats;
        })
    } 
}