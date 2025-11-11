import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../Service/service';
import { IColor } from '../models/colors.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-prueba2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prueba2.html',
  styleUrls: ['./prueba2.css'],
})
export class Prueba2 implements OnInit {

  constructor(private service: Service) { }

  todosLosColores: IColor[] = [];//almacena todos los colores de la api (148)
  randomColores: any[] = [{
    "name": "AliceBlue",
    "theme": "light",
    "group": "Gray",
    "hex": "F0F8FF",
    "rgb": "240,248,255"
  }, {
    "name": "AntiqueWhite",
    "theme": "light",
    "group": "Gray",
    "hex": "FAEBD7",
    "rgb": "250,235,215"
  },
  {
    "name": "Aqua",
    "theme": "light",
    "group": "Aqua",
    "hex": "00FFFF",
    "rgb": "0,255,255"
  },
  {
    "name": "Aqua",
    "theme": "light",
    "group": "Aqua",
    "hex": "00FFFF",
    "rgb": "0,255,255"
  }, {
    "name": "Aquamarine",
    "theme": "light",
    "group": "Aqua",
    "hex": "7FFFD4",
    "rgb": "127,255,212"
  }, {
    "name": "Azure",
    "theme": "light",
    "group": "Gray",
    "hex": "F0FFFF",
    "rgb": "240,255,255"
  }
  ];
  randomColors: any[] = [];//almacenara colores random para mostrar

  ngOnInit() {
    this.llamarColores();
  }
  llamarColores() {
    this.service.getFullColors().subscribe({
      next: (data: any) => {
        this.todosLosColores = data.colors
        console.log(this.todosLosColores)
        this.generarRandomColors();
      }
    })
  }
  generarRandomColors() {
    // copia el array original para no modificarlo
    const copia = [...this.todosLosColores];
    // lo mezcla aleatoriamente
    const mezclado = copia.sort(() => Math.random() - 0.5);
    // toma los primeros 5 o 6
    this.randomColors = mezclado.slice(0, 6);
  }
  obtenerColores() {
    this.generarRandomColors();

  }


}
