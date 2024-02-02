import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { PressHttpService } from "../Services/httppress.service";
import { LoggingService } from "../Services/Logging.service";

@Component({
    selector: 'press-component',
    templateUrl: './press.component.html',
    styleUrls:['./press.component.css']
})

export class PressComponent implements OnInit{

  pressForm:  FormGroup;

  inter: String = " Welcome to Press Component";
  pagetitle: String = "Gerenciamento de Produtoras";     

  constructor(private logService: LoggingService, private prsService: PressHttpService){
    
  }         

    ngOnInit()  {
      this.pressForm = new FormGroup({
            'name':  new FormControl(''),
            'nickname':  new FormControl(''),
            'cnpj':  new FormControl(''),
            'ie':  new FormControl(''),
            'foundation':  new FormControl(''),
            'email':  new FormControl(''),
            'website':  new FormControl('')
      });
    }

    
   
    onSubmit(){   
      console.log("Formulario " + JSON.stringify(this.pressForm.value))
      this.prsService.postPress(this.pressForm.value);
    }

   

    
}