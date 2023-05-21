import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsivenessService {
  public isMobile = signal(false);

  constructor(media: MediaMatcher) {
    const query = media.matchMedia('(max-width: 600px)');

    this.isMobile.set(query.matches);
    query.addEventListener('change', (query) =>
      this.isMobile.set(query.matches)
    );
  }
}
