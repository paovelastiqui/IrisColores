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
export class Detalles implements OnInit {

  constructor(private service: Service, private activatedRoute: ActivatedRoute) { }

  datosDeColor: any = {};
  parametros: string = '';
  mensajeHex: boolean = false;
  mensajeRgb: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.parametros = params['name'];
    })
    this.llamarDatosDeColor(this.parametros);
  }


  llamarDatosDeColor(parametro: string) {
    this.service.getColorsByName(parametro).subscribe({
      next: (data: any) => {
        this.datosDeColor = data.data
      }, error: (error) => {
        console.error(error)
      }
    })
  }
  copiarHex(hex: string) {
    navigator.clipboard.writeText('#' + hex);
    this.mensajeHex = true;
    setTimeout(()=>{
      this.mensajeHex = false;
    },3000)
  }
  copiarRgb(rgb: string) {
    navigator.clipboard.writeText('rgb('+rgb+')');
    this.mensajeRgb = true;
    setTimeout(()=>{
      this.mensajeRgb = false  
    },3000)        
  }
  



}
