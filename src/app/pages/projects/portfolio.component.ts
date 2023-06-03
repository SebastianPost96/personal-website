import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MinesweeperComponent, WeatherComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {}
