import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { Engine, Container, ParticlesOptions } from 'tsparticles-engine';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';
@Component({
  selector: 'app-wand-confetti',
  standalone: true,
  imports: [NgParticlesModule, NgIf],
  templateUrl: './wand-confetti.component.html',
  styleUrls: ['./wand-confetti.component.scss'],
})
export class WandConfettiComponent {
  particles: ParticlesOptions | undefined;
  particlesContainer: Container | undefined;
  triggerConfetti = false;
  constructor() {}

  @HostListener('mouseenter') lala() {
    this.triggerConfetti = true;
    if (this.particlesContainer && this.particles) {
      this.particlesContainer.reset();
      this.particlesContainer.options.particles = this.particles;
    }
  }

  particlesOptions = {
    emitters: [
      {
        life: {
          duration: 1,
          count: 1,
        },
        position: {
          x: 20,
          y: 20,
        },
      },
    ],
    particles: {
      color: {
        value: ['#ffc107', '#f9ed04'],
      },
    },
    preset: 'confetti',
  };

  particlesLoaded(container: Container): void {
    this.particlesContainer = container;
    this.particles = container.options.particles;
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadConfettiPreset(engine);
  }
}
