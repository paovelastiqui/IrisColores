import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IColor } from '../models/colors.model'
@Injectable({
  providedIn: 'root',
})
export class Service {
  
  constructor(private _httpClient : HttpClient){}


  private apiUrl = "https://www.csscolorsapi.com/api/";

  //recibe todos los colores con sus respectivas información
  public getFullColors() : Observable<IColor[]>{
    return this._httpClient.get<IColor[]>(`${this.apiUrl}colors`)
  }
  
  //recibe toda la información segun el color elegido
  public getColorsByName(colorName : string) : Observable<IColor>{
    return this._httpClient.get<IColor>(`${this.apiUrl}colors/${colorName}`)
  }

  //recibe información del grupo de colores de un color
  public getColorByGroup(colorName : string): Observable<IColor[]>{
    return this._httpClient.get<IColor[]>(`${this.apiUrl}colors/group/${colorName}`)
  }

  //recibe información del grupo de colores oscuros(dark) o claros(light)
  public getColorByTheme(themeName : string): Observable<IColor[]>{
    return this._httpClient.get<IColor[]>(`${this.apiUrl}colors/theme/${themeName}`)
  }
  
}
