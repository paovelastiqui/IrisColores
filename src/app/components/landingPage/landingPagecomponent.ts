import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { PaletaComponent } from '../paleta/paleta.component';
import { ConvertidorComponent } from '../convertidor/convertidor.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, PaletaComponent, ConvertidorComponent],
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})
export class LandingPageComponent {}
