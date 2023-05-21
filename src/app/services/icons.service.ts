import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons() {
    this.iconRegistry
      .addSvgIcon(
        'github',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/github-mark.svg'),
        { viewBox: '0 0 98 96' }
      )
      .addSvgIcon(
        'github-white',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          'assets/github-mark-white.svg'
        ),
        { viewBox: '0 0 98 96' }
      )
      .addSvgIcon(
        'linkedin',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          'assets/LinkedIn_icon.svg'
        ),
        { viewBox: '0 0 72 72' }
      );
  }
}
