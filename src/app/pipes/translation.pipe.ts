import { Pipe, PipeTransform } from '@angular/core';
import { Translation } from '../types/translation';
import { ConfigService } from '../services/config.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslationPipe implements PipeTransform {
  constructor(private config: ConfigService) {}

  transform(translation: Translation | string): string {
    if (typeof translation === 'string') return translation;

    return translation[this.config.language()];
  }
}
