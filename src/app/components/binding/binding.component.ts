import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
    /*
    http://jwebmx.blogspot.com.ar/2014/09/typescript-tipos-de-datos.html
    tipos de valores
    varName: variable_type = initial_value;
    eg: declaraciones explícitas
    */
    edad:number = 24;
    nombre:string = 'Mi nombre es pepito';
    fuma:boolean = true;
    otroDato:any; // declaración explícita.
    // Valor null & undefined (nulo e indefinido)
    // el valor undefined es el valor por defecto cuando no se inicializa al momento de su declaración.
    apellido:string = null; // esta variable no tiene valor, mejor dicho la variable tiene ausencia de valor.
    // Array
    lista:number[] = [1,2,3,4,5,6];
    vocales:Array<string> = ['a','b','c','d','e'];
    booleanos:boolean[] = []; // arreglo booleano vacío.

    public listado:number[] = [1,2,3];
    public person = {
        photoUrl: 'assets/angular2.png',
        emailAddress: 'mail@mail.com',
        birthday: 'ayer'
    }

  constructor() {

  }

  ngOnInit() {

  }

}
