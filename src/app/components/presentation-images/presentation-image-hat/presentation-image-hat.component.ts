import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-presentation-image-hat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation-image-hat.component.html',
  styleUrls: [
    './presentation-image-hat.component.scss',
    './../presentation-image.scss',
  ],
})
export class PresentationImageHatComponent implements OnInit {
  isHandset = false;
  isTabletPortrait = false;
  showRat = false;
  ratImageSize = {
    width: 150,
    height: 150,
  };
  hatImageSize = {
    width: 150,
    height: 150,
  };
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,
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
          } else if (breakpoints[Breakpoints.Medium]) {
            this.isTabletPortrait = false;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.TabletPortrait]) {
            this.hatImageSize.height = 256;
            this.hatImageSize.width = 256;
            this.isTabletPortrait = true;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.Small]) {
            this.hatImageSize.height = 256;
            this.hatImageSize.width = 256;
            this.isTabletPortrait = true;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.TabletLandscape]) {
            this.isTabletPortrait = false;
            this.isHandset = false;
          } else if (breakpoints[Breakpoints.HandsetPortrait]) {
            this.isTabletPortrait = false;
            this.isHandset = true;
            this.hatImageSize.height = 150;
            this.hatImageSize.width = 150;
          }
        },
      });
  }

  getTheRabbitOutOfTheHat() {
    this.showRat = true;
    setTimeout(() => {
      this.showRat = false;
    }, 2000);
  }
}
