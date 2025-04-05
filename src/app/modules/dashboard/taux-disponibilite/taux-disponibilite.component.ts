import { Component } from '@angular/core';

@Component({
  selector: 'app-taux-disponibilite',
  standalone: false,
  templateUrl: './taux-disponibilite.component.html',
  styleUrl: './taux-disponibilite.component.scss'
})
export class TauxDisponibiliteComponent {
  data: any;
  data1: any;

  options: any;
  options1:any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
        labels: ['Lun', 'Mar', 'Mec', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
              {
                  label: 'Premium',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4
              },
              {
                  label: 'Gasoil',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--green-500'),
                  tension: 0.4
              },
              {
                label: 'Super',
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

      this.data1 = {
        labels: ['Lun', 'Mar', 'Mec', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
              {
                  data: [65, 59, 80, 81, 56, 55, 10],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4
              }
          ]
      };

      this.options1 = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                display : false,
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
