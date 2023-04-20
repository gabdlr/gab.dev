import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ControlsBarComponent } from './components/controls-bar/controls-bar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { WandConfettiComponent } from './components/wand-confetti/wand-confetti.component';
import { PresentationImageWandComponent } from './components/presentation-images/presentation-image-wand/presentation-image-wand.component';
import { PresentationImageHatComponent } from './components/presentation-images/presentation-image-hat/presentation-image-hat.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ControlsBarComponent,
    WandConfettiComponent,
    PresentationImageWandComponent,
    PresentationImageHatComponent,
  ],
})
export class AppComponent {
  title = 'Gabriel De Los Rios, Web Developer';

  gridTiles = {
    heigth: '25%',
    cols: 8,
    photoTile: {
      cols: 2,
      rows: 3,
    },
    introductionTile: {
      cols: 6,
      rows: 3,
    },
    waveTile: {
      cols: 8,
      rows: 1,
    },
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
            this.gridTiles.cols = 8;
            this.gridTiles.heigth = '25%';
            this.gridTiles.photoTile.cols = 2;
            this.gridTiles.photoTile.rows = 3;
            this.gridTiles.introductionTile.cols = 6;
            this.gridTiles.introductionTile.rows = 3;
            this.gridTiles.waveTile.cols = 8;
            this.gridTiles.waveTile.rows = 1;
          } else if (breakpoints[Breakpoints.Medium]) {
            this.gridTiles.cols = 8;
            this.gridTiles.heigth = '25%';
            this.gridTiles.photoTile.cols = 2;
            this.gridTiles.photoTile.rows = 3;
            this.gridTiles.introductionTile.cols = 6;
            this.gridTiles.introductionTile.rows = 3;
            this.gridTiles.waveTile.cols = 8;
            this.gridTiles.waveTile.rows = 1;
          } else if (breakpoints[Breakpoints.TabletPortrait]) {
            this.gridTiles.cols = 1;
            this.gridTiles.heigth = '5%';
            this.gridTiles.photoTile.cols = 1;
            this.gridTiles.photoTile.rows = 8;
            this.gridTiles.introductionTile.cols = 1;
            this.gridTiles.introductionTile.rows = 8;
            this.gridTiles.waveTile.cols = 1;
            this.gridTiles.waveTile.rows = 4;
          } else if (breakpoints[Breakpoints.Small]) {
            this.gridTiles.cols = 1;
            this.gridTiles.heigth = '5%';
            this.gridTiles.photoTile.cols = 1;
            this.gridTiles.photoTile.rows = 8;
            this.gridTiles.introductionTile.cols = 1;
            this.gridTiles.introductionTile.rows = 8;
            this.gridTiles.waveTile.cols = 1;
            this.gridTiles.waveTile.rows = 4;
          } else if (breakpoints[Breakpoints.TabletLandscape]) {
            this.gridTiles.cols = 8;
            this.gridTiles.heigth = '25%';
            this.gridTiles.photoTile.cols = 2;
            this.gridTiles.introductionTile.cols = 6;
            this.gridTiles.waveTile.cols = 8;
            this.gridTiles.waveTile.rows = 1;
          } else if (breakpoints[Breakpoints.HandsetPortrait]) {
            this.gridTiles.cols = 1;
            this.gridTiles.heigth = '5%';
            this.gridTiles.photoTile.cols = 1;
            this.gridTiles.photoTile.rows = 6;
            this.gridTiles.introductionTile.cols = 1;
            this.gridTiles.introductionTile.rows = 10;
            this.gridTiles.waveTile.cols = 1;
            this.gridTiles.waveTile.rows = 4;
          }
        },
      });
  }
}
