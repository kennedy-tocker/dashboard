import { Component, OnInit, ViewChild, inject, ElementRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Chart, registerables } from 'chart.js';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ProgressBarComponent,
  ]
})
export class DashboardComponent implements OnInit {
  constructor() {
    Chart.register(...registerables)
  }

  @ViewChild("relVendas", { static: true }) relVendas!: ElementRef;
  @ViewChild("relMarcas", { static: true }) relMarcas!: ElementRef;
  ngOnInit() {
    new Chart(this.relVendas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            data: [47, 34, 44, 23, 18, 40, 43, 42, 50, 60, 66, 63],
            borderColor: [
              '#ff8a00',
            ],
            backgroundColor: [
              '#ff8a00',
            ],
            fill: false
          }

        ],
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    })
    new Chart(this.relMarcas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Nike', 'Adidas', 'Puma', 'Fila'],
        datasets: [
          {
            data: [23, 43, 56, 12],
            backgroundColor: [
              '#ff003c',
              '#ff8a00',
              '#fabe28',
              '#88c100'
            ]
          }
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true
          }
        },
        responsive: true,
        maintainAspectRatio: true,
      }
    })
  }
}
