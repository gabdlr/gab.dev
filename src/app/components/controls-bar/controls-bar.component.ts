import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
@Component({
  selector: 'app-controls-bar',
  standalone: true,
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.scss'],
  imports: [CommonModule, MatGridListModule, LanguageSelectorComponent],
})
export class ControlsBarComponent {}
