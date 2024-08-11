import { Component, OnInit, ViewChild, inject, ElementRef } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Chart, Legend, registerables } from 'chart.js';
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
    ProgressBarComponent
  ]
})
export class DashboardComponent implements OnInit{
  constructor(){
    Chart.register(...registerables)
  }

  @ViewChild("relVendas", {static: true}) relVendas!: ElementRef;
  @ViewChild("relMarcas", {static: true}) relMarcas!: ElementRef;
  ngOnInit(){
      new Chart(this.relVendas.nativeElement, {
        type:'line',
        data:{
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          datasets: [
            {
              data: [47,34,44,23,18,40,43,42,50,60,66,63],
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
        options:{ 
          plugins:{
            legend:{
              display: false
          },
        }
      }
    })
    new Chart(this.relMarcas.nativeElement, {
      type:'doughnut',
      data:{
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
      options:{ 
        plugins:{
          legend:{
            display: true
        },
      }
    }
  })
  }
  private breakpointObserver = inject(BreakpointObserver);

  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
