import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taux-captation',
  standalone : false,
  templateUrl: './taux-captation.component.html',
  styleUrl: './taux-captation.component.scss'
})
export class TauxCaptationComponent {
 progresBarValue = 40; // Input progress (0-100)
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
