import { NgForm } from "@angular/forms";

export class LoggingService {
    logFormInfo(form: NgForm){
        console.log("Objetos recebidos")
        console.log( form)
    }

    consoleOutPut( data: any){
        console.log(data)
    }



}