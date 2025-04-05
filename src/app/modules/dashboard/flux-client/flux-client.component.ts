import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flux-client',
  standalone:false,
  templateUrl: './flux-client.component.html',
  styleUrl: './flux-client.component.scss'
})
export class FluxClientComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      
      this.data = {
          labels: ['Lun', 'Mar', 'Mec', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
              {
                  label: 'Dataset 1',
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  yAxisID: 'y',
                  tension: 0.4,
                  data: [65, 59, 80, 81, 56, 55, 10]
              }
          ]
      };
      
      this.options = {
          stacked: false,
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                display:false,
                  labels: {
                    display: false,

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
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                      color: "#fff"
                  },
                  grid: {
                      color: "#dedede"
                  }
              },

          }
      };
  }
}
