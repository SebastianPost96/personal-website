import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(private _iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer) {
    this._registerIcons();
  }

  private _registerIcons() {
    this._iconRegistry
      .addSvgIcon('github', this._sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'), {
        viewBox: '0 0 98 96',
      })
      .addSvgIcon('github-white', this._sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-white.svg'), {
        viewBox: '0 0 98 96',
      })
      .addSvgIcon('linkedin', this._sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'), {
        viewBox: '0 0 36 36',
      })
      .addSvgIcon('de', this._sanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/de.svg'), {
        viewBox: '0 0 640 480',
      })
      .addSvgIcon('en', this._sanitizer.bypassSecurityTrustResourceUrl('assets/icons/flags/en.svg'), {
        viewBox: '0 0 640 480',
      });
  }
}
