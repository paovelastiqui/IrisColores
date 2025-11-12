import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})

export class ConvertidorComponent {
  color: string = '#ffffff';
  rgb = { r: 255, g: 255, b: 255 };
  hsl = { h: 0, s: 0, l: 100 };

  actualizarColor() {
    if (/^#([A-Fa-f0-9]{6})$/.test(this.color)) {
      this.rgb = this.hexToRgb(this.color);
      this.hsl = this.rgbToHsl(this.rgb.r, this.rgb.g, this.rgb.b);
    }
  }

  hexToRgb(hex: string) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  rgbToHsl(r: number, g: number, b: number) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }
}