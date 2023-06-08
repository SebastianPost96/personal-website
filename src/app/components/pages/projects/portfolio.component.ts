import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { WeatherComponent } from './weather/weather.component';
import { TranslationFile } from '../../../types/translation';
import { TranslationPipe } from '../../../pipes/translation.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MinesweeperComponent, WeatherComponent, TranslationPipe],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  translations = {
    weatherApp: { en: 'Weather App', de: 'Wetter-App' },
    mineSweeper: { en: 'Minesweeper', de: 'Minesweeper' },
  } satisfies TranslationFile;
}
