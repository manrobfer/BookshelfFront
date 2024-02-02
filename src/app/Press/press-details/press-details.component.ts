import { Component, OnInit } from "@angular/core";
import { PressHttpService } from "src/app/Services/httppress.service";
import { Press } from "src/app/models/press.model";


@Component({
    selector: 'PressDetails-component',
    templateUrl: 'press-details.component.html',
    styleUrls: ['press-details.component.css']
})
export class PressDetailsComponent  implements OnInit{

    
    constructor(private service: PressHttpService){}

    title: String = "Detalhes da press";

    presses: Press[] = [];

    ngOnInit(): void {
       this.getPress();
    }

    getPress(){
        this.service.getPress()
                    .subscribe(press => {
            this.presses = press;
        })
    }
   
}