import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../Service/service';
import { IColor } from '../models/colors.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-prueba2',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './prueba2.html',
  styleUrls: ['./prueba2.css'],
})
export class Prueba2 implements OnInit {

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
        
        
        console.log(this.todosLosColores)        
      },error: (error) => {
        console.error(error)
      }
    })
  }
  


}
