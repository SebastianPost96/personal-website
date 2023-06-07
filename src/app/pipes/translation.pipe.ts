import { Pipe, PipeTransform } from '@angular/core';
import { Translation } from '../types/translation';
import { ConfigService } from '../services/config.service';

@Pipe({
  name: 'translate',
})
export class TranslationPipe implements PipeTransform {
  constructor(private config: ConfigService) {}

  transform(translation: Translation): string {
    return translation[this.config.language()];
  }
}
