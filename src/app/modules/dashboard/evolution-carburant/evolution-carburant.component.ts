import { Component } from '@angular/core';

@Component({
  selector: 'app-evolution-carburant',
  standalone : false,
  templateUrl: './evolution-carburant.component.html',
  styleUrl: './evolution-carburant.component.scss'
})
export class EvolutionCarburantComponent {
  data: any;
  options:any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Lun', 'Mar', 'Mec', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [
            {
                label: 'Volume vendu ',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Nb transaction ',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--green-500'),
                tension: 0.4
            },
            {
              label: 'CA',
              data: [10, 30, 25, 18, 76, 25, 89],
              fill: false,
              borderColor: documentStyle.getPropertyValue('--red-500'),
              tension: 0.4
          }
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
              position: 'top',
                labels: {
                    color: "#fff"
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#fff"
                }
            },
            y: {
                ticks: {
                    color: "#fff"
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
  
}
