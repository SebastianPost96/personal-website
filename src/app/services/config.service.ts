import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { delay, map } from 'rxjs';

const DARK_MODE = 'darkmode';
const LANGUAGE = 'lang';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _isDarkMode = signal(inject(MediaMatcher).matchMedia('(prefers-color-scheme: dark)').matches);
  private _language = signal(navigator.language.startsWith('de') ? 'de' : 'en');

  public isDarkMode = this._isDarkMode.asReadonly();
  public language = this._language.asReadonly();
  public isMobile = toSignal(
    inject(BreakpointObserver)
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => matches))
  );

  constructor() {
    this._syncMobileHeaderColor();
    this._loadDarkMode();
    this._loadLanguage();
  }

  public toggleDarkMode() {
    const newTheme = !this._isDarkMode();
    localStorage.setItem(DARK_MODE, newTheme.toString());
    this._isDarkMode.set(newTheme);
  }

  public toggleLanguage() {
    const newLang = this._language() === 'de' ? 'en' : 'de';
    localStorage.setItem(LANGUAGE, newLang);
    this._language.set(newLang);
  }

  private _syncMobileHeaderColor() {
    toObservable(this._isDarkMode)
      .pipe(takeUntilDestroyed(), delay(0))
      .subscribe(() => {
        const toolbar = document.getElementById('toolbar');
        const headerElem = document.getElementById('theme-color');

        if (toolbar && headerElem) {
          const color = getComputedStyle(toolbar).backgroundColor;
          headerElem.setAttribute('content', color);
        }
      });
  }

  private _loadDarkMode(): void {
    const stored = localStorage.getItem(DARK_MODE);
    if (stored) {
      this._isDarkMode.set(stored === 'true');
    }
  }

  private _loadLanguage(): void {
    const stored = localStorage.getItem(LANGUAGE);
    if (stored) {
      this._language.set(stored);
    }
  }
}
