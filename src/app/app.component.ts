import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public sideNavOpen = signal(false);

  constructor(private icons: IconsService) {}

  toggleSideNav(explicit?: boolean): void {
    this.sideNavOpen.update((open) => (typeof explicit === 'boolean' ? explicit : !open));
  }
}
