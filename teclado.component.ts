import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent implements OnInit {

  public resultado: string= "";

  clicar(valor:string){
    this.resultado+=valor;
    
  }

  limpar() {
    this.resultado="";
  }

  finalizar() {
    this.resultado=eval(this.resultado).toString();
  }


    constructor () { }

   
    ngOnInit()  { }
    

}


