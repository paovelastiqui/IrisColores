
import { NgClass } from '@angular/common';
import {Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  miFormulario: FormGroup;

  constructor(private _fb: FormBuilder) {

    this.miFormulario = _fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],      
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  get labelDocumento() {
    const tipo = this.miFormulario.get('tipoDni')?.value;
    return tipo? `Número de ${tipo}` : ''
  }

  enviar() {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
  }

  mostrarErrores(control: string, validator: string) {
    const campo = this.miFormulario.get(control);
    return campo?.hasError(validator) && campo?.touched;
  }
}