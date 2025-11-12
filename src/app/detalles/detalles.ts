import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../Service/service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.html',
  styleUrls: ['./detalles.css',]
})
export class Detalles implements OnInit{

  constructor(private service : Service,private activatedRoute:ActivatedRoute){}
  color : string = 'red';
  datosDeColor :any = {};
  parametros: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.parametros = params['name'];
    })
    this.llamarDatosDeColor(this.parametros);
  }


  llamarDatosDeColor(parametro:string){
    this.service.getColorsByName(parametro).subscribe({
      next : (data:any) => {
        this.datosDeColor = data.data
      },error : (error) => {
        console.error(error)
      }
    })
  }



}
