import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

const DARK_MODE = 'darkmode';

@Injectable({
  providedIn: 'root',
})
export class ResponsivenessService {
  public isDarkMode = signal(inject(MediaMatcher).matchMedia('(prefers-color-scheme: dark)').matches);
  public isMobile = toSignal(
    inject(BreakpointObserver)
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => matches))
  );

  constructor() {
    this.syncMobileHeaderColor();
    this.loadAndPersistDarkMode();
  }

  public toggleDarkMode() {
    const newTheme = !this.isDarkMode();
    localStorage.setItem(DARK_MODE, newTheme.toString());
    this.isDarkMode.set(newTheme);
  }

  private syncMobileHeaderColor() {
    toObservable(this.isDarkMode)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const toolbar = document.getElementById('toolbar');
        const headerElem = document.getElementById('theme-color');

        if (toolbar && headerElem) {
          const color = getComputedStyle(toolbar).backgroundColor;
          headerElem.setAttribute('content', color);
        }
      });
  }

  private loadAndPersistDarkMode(): void {
    const stored = localStorage.getItem(DARK_MODE);
    if (stored) {
      this.isDarkMode.set(stored === 'true');
    }
  }
}
