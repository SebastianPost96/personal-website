import { ChangeDetectionStrategy, Component, HostBinding, signal } from '@angular/core';

import { IconsService } from './services/icons.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('class')
  get rootClass() {
    const theme = this._config.isDarkMode() ? 'dark' : 'light';
    const device = this._config.isMobile() ? 'mobile' : 'desktop';

    return `${theme} ${device}`;
  }

  public sideNavOpen = signal(false);

  constructor(private _icons: IconsService, private _config: ConfigService) {}

  toggleSideNav(explicit?: boolean): void {
    this.sideNavOpen.update((open) => (typeof explicit === 'boolean' ? explicit : !open));
  }
}
