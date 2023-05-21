import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from '@angular/cdk/layout';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsivenessService {
  private darkModeQuery = inject(MediaMatcher).matchMedia(
    '(prefers-color-scheme: dark)'
  );

  public isDarkMode = signal(this.darkModeQuery.matches);
  public isMobile = toSignal(
    inject(BreakpointObserver)
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => matches))
  );

  constructor() {
    this.darkModeQuery.addEventListener('change', (darkMode) => {
      this.isDarkMode.set(darkMode.matches);
      this.syncMobileHeaderColor();
    });
  }

  public syncMobileHeaderColor() {
    const toolbar = document.getElementById('toolbar');
    const headerElem = document.getElementById('theme-color');

    if (toolbar && headerElem) {
      const color = getComputedStyle(toolbar).backgroundColor;
      headerElem.setAttribute('content', color);
    }
  }
}
