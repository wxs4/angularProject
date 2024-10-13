import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
  nombre="william";
  apellido="sanchez";
  private edad=25;
  empresa="encora";

  changeCompany(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  llamaEmpresa(value:String){
    
  }

  getedad(){
    return this.edad;
  }

  habilitarCaja = false;

  userRegistred = false;

  registerText = "no eres un trolazo";

  activeCheck(){
    this.userRegistred = false;
  }

  setUserRegistred(event:Event){
    //alert("Diste en el checkbox xdd . . .");
    //this.registerText = "eres un trolazo"
    //alert(event.target)
    if((<HTMLInputElement>event.target).value=="si"){
      this.registerText="te registraste";
    }else{
      this.registerText="no te registraste";
    }
  }

}
