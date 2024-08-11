import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  Marcas: { nome: string, width: number, cor: string }[] = [
    {
      nome: 'Nike',
      width: 23,
      cor: '#ff003c'
    },
    {
      nome: 'Puma',
      width: 56,
      cor: '#fabe28'
    },
    {
      nome: 'Adidas',
      width: 43,
      cor: '#ff8a00'
    },
    {
      nome: 'Fila',
      width: 12,
      cor: '#88c100'
    }
  ]
}
