import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[]=['Spiderman','Hulk','Trunks','Goku'];
  heroeBorrado : string ='';
 
  borrarHeroe() {
    
    const heroeBorrado=this.heroes.shift();
    console.log(heroeBorrado);
    this.heroeBorrado = heroeBorrado ||'';
  }
}
