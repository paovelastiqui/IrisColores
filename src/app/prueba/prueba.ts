import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { IColor } from '../models/colors.model';


@Component({
  selector: 'app-prueba',
  imports: [CommonModule],
  templateUrl: './prueba.html',
  styleUrl: './prueba.css',
})
export class Prueba implements OnInit  {

  constructor(){}
  colors = [
  { name: 'Rojo', hex: '#FF0000' },
  { name: 'Verde', hex: '#00FF00' },
  { name: 'Azul', hex: '#0000FF' },
  { name: 'Amarillo', hex: '#FFFF00' },
  { name: 'Cian', hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Negro', hex: '#000000' },
  { name: 'Blanco', hex: '#FFFFFF' },
  { name: 'Gris', hex: '#808080' },
  { name: 'Naranja', hex: '#FFA500' },
];
fullColores: IColor[] = [];
 randomColors: any[] = [];

  

  generarRandomColors() {
    // copia el array original para no modificarlo
    const copia = [...this.colors];
    // lo mezcla aleatoriamente
    const mezclado = copia.sort(() => Math.random() - 0.5);
    // toma los primeros 5 o 6
    this.randomColors = mezclado.slice(0, 6);
  }
  ngOnInit() {
    this.generarRandomColors(); // genera los primeros 5 apenas carga
    //  this._service.getFullColors().subscribe({
    //   next: (data:any) => {
    //     this.fullColores = data.data;
    //     console.log(this.fullColores)
    //   },
    //   error: (error) => {
    //     console.log(`Hubo un error: ${error}`)
    //   }
    //  })
  }


}
