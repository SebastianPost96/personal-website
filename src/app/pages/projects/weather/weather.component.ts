import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfigService } from '../../../services/config.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslationFile } from '../../../types/translation';
import { TranslationPipe } from '../../../pipes/translation.pipe';
import { translations } from '../../../constants/global-translations';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, NgOptimizedImage, MatButtonModule, MatIconModule, TranslationPipe],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  translation = {
    description: {
      de: 'Kleine App, die das örtliche Wetter mithilfe einer öffentlichen API anzeigt. \nDie UI-Komponenten wurden von Grund auf mit Tailwind entwickelt.',
      en: 'Small App that displays the local weather by using a public API. \nUI components were built from the ground up with Tailwind',
    },
    open: translations.open,
    sourceCode: translations.sourceCode,
  } satisfies TranslationFile;

  constructor(public config: ConfigService) {}
}
