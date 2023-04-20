import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WandConfettiComponent } from './../../wand-confetti/wand-confetti.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-presentation-image-wand',
  standalone: true,
  templateUrl: './presentation-image-wand.component.html',
  styleUrls: [
    './presentation-image-wand.component.scss',
    './../presentation-image.scss',
  ],
  imports: [CommonModule, WandConfettiComponent],
})
export class PresentationImageWandComponent implements OnInit {
  isHandset = false;
  isTabletPortrait = false;
  magicWandImageSize = {
    width: 300,
    height: 300,
  };
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe({
        next: (result) => {
          const breakpoints = result.breakpoints;
          if (breakpoints[Breakpoints.Large]) {
            this.isHandset = false;
            this.magicWandImageSize.height = 300;
            this.magicWandImageSize.width = 300;
          } else if (breakpoints[Breakpoints.Medium]) {
            this.isTabletPortrait = false;
            this.isHandset = false;
            this.magicWandImageSize.height = 240;
            this.magicWandImageSize.width = 240;
          } else if (breakpoints[Breakpoints.TabletPortrait]) {
            this.isTabletPortrait = true;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.Small]) {
            this.isTabletPortrait = true;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.TabletLandscape]) {
            this.isTabletPortrait = false;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.HandsetPortrait]) {
            this.isTabletPortrait = false;
            this.isHandset = true;
            this.magicWandImageSize.height = 200;
            this.magicWandImageSize.width = 200;
          }
        },
      });
  }
}
