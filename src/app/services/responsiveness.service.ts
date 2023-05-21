import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsivenessService {
  public isMobile = toSignal(
    inject(BreakpointObserver)
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => matches))
  );

  public syncMobileHeaderColor() {
    const toolbar = document.getElementById('toolbar');
    const headerElem = document.getElementById('theme-color');

    if (toolbar && headerElem) {
      const color = getComputedStyle(toolbar).backgroundColor;
      headerElem.setAttribute('content', color);
    }
  }
}
