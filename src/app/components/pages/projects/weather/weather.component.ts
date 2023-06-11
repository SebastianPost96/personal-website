import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfigService } from '../../../../services/config.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslationFile } from '../../../../types/translation';
import { TranslationPipe } from '../../../../pipes/translation.pipe';
import { TRANSLATIONS } from '../../../../constants/global-translations';

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
      de: 'Kleine App, die das örtliche Wetter mithilfe einer öffentlichen API anzeigt. \nEntwickelt, um Tailwind zur Komponentenerstellung auszuprobieren.',
      en: 'Small App that displays the local weather by using a public API. \nBuilt to try out UI component building with Tailwind',
    },
    open: TRANSLATIONS.open,
    sourceCode: TRANSLATIONS.sourceCode,
  } satisfies TranslationFile;

  constructor(public config: ConfigService) {}
}
