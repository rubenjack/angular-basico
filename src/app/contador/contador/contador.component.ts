import { Component } from '@angular/core'

@Component({
    selector : 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    
    <p></p>
    <button (click)="acumular(base)"> + {{ base }}</button>
    <span>{{base}}</span>
    <button (click)="acumular(-base)">+ {{base}}</button>
    `
})
export class ContadorComponent {
    titulo:string = 'Contador App';
    numero:number=10;
    base: number =5;
   
   acumular(valor: number){
    this.numero+=valor;
   }
   acumular2(valor: number){
    this.base+=valor;
   }
}