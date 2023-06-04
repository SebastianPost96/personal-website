import { ChangeDetectionStrategy, Component, HostBinding, signal } from '@angular/core';

import { IconsService } from './services/icons.service';
import { ResponsivenessService } from './services/responsiveness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('class')
  get rootClass() {
    const theme = this._responsive.isDarkMode() ? 'dark' : 'light';
    const device = this._responsive.isMobile() ? 'mobile' : 'desktop';

    return `${theme} ${device}`;
  }

  public sideNavOpen = signal(false);

  constructor(private _icons: IconsService, private _responsive: ResponsivenessService) {}

  toggleSideNav(explicit?: boolean): void {
    this.sideNavOpen.update((open) => (typeof explicit === 'boolean' ? explicit : !open));
  }
}
