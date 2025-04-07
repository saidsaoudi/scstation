import { Component } from '@angular/core';

@Component({
  selector: 'app-taux-service',
  standalone : false,
  templateUrl: './taux-service.component.html',
  styleUrl: './taux-service.component.scss'
})
export class TauxServiceComponent {
  progresBarValue = 50; // Input progress (0-100)
  displayedprogresBarValue = 0;
  rotation = 'rotate(45deg)';

  ngOnInit() {
    this.animateProgress();
  }

  animateProgress() {
    let current = 0;
    const animate = () => {
      if (current <= this.progresBarValue) {
        this.rotation = `rotate(${45 + current * 1.8}deg)`;
        this.displayedprogresBarValue = Math.floor(current);
        current += 0.5;
        requestAnimationFrame(animate);
      } else {
        this.displayedprogresBarValue = Math.floor(this.progresBarValue);
        this.rotation = `rotate(${45 + this.progresBarValue * 1.8}deg)`;
      }
    };
    animate();
  }
}
