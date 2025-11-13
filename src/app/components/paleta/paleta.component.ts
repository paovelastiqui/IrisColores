import { Component } from '@angular/core';
import { IColor } from '../../models/colors.model';
import { Service } from '../../Service/service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-paleta',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './paleta.component.html',
  styleUrls: ['./paleta.component.css']
})
export class PaletaComponent {
  constructor(private service: Service) { }
  
    todosLosColores: IColor[] = [];//almacena todos los colores de la api (148)
    randomColors: any[] = [];//almacenara colores random para mostrar
  
    ngOnInit() {
      this.llamarColores();
    }
    llamarColores() {
      this.service.getFullColors().subscribe({
        next: (data: any) => {
          this.todosLosColores = data.colors
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
