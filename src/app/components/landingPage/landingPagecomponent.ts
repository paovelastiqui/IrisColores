import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { PaletaComponent } from '../paleta/paleta.component';
import { ConvertidorComponent } from '../convertidor/convertidor.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, PaletaComponent, ConvertidorComponent, ContactoComponent],
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})
export class LandingPageComponent {}
