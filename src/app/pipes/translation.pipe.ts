import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { Translation } from '../types/translation';
import { ConfigService } from '../services/config.service';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { delay, filter, map, skip, tap } from 'rxjs';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslationPipe implements PipeTransform {
  constructor(private config: ConfigService, private el: ElementRef<Node>) {
    this.animateTranslation();
  }

  transform(translation: Translation | string): string {
    if (typeof translation === 'string') return translation;

    return translation[this.config.language()];
  }

  private animateTranslation() {
    const animationTimeMs = 300;
    const animations = ['animate__animated', 'animate__shakeX'];

    toObservable(this.config.language)
      .pipe(
        skip(1),
        map(() => this.el.nativeElement.parentElement),
        filter((val): val is HTMLElement => !!val),
        tap((parent) => {
          parent.style.animationDuration = animationTimeMs + 'ms';
          parent.classList.add(...animations);
        }),
        delay(animationTimeMs),
        takeUntilDestroyed()
      )
      .subscribe((parent) => {
        parent.classList.remove(...animations);
      });
  }
}
