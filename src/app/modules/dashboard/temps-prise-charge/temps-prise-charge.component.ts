import { Component } from '@angular/core';

interface Lane {
  name: string;
  blocks: ('good' | 'warning' | 'danger')[];
}
@Component({
  selector: 'app-temps-prise-charge',
  standalone:false,
  templateUrl: './temps-prise-charge.component.html',
  styleUrl: './temps-prise-charge.component.scss'
})
export class TempsPriseChargeComponent {

  lanes: Lane[] = [
    {
      name: 'Voie 1',
      blocks: ['good', 'warning', 'good', 'danger']
    },
    {
      name: 'Voie 2',
      blocks: ['danger', 'good', 'good', 'warning']
    },
    {
      name: 'Voie 3',
      blocks: ['good', 'danger', 'good', 'good']
    }
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'good':
        return 'bg-emerald-400';
      case 'warning':
        return 'bg-orange-400';
      case 'danger':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  }

}
