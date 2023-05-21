import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { IconsService } from './services/icons.service';
import { ResponsivenessService } from './services/responsiveness.service';

interface Page {
  route: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly pages: Page[] = [
    { route: '/', title: 'Home' },
    { route: '/projects', title: 'Projects' },
  ];

  sideNavOpen = signal(false);

  activePage = toSignal(
    this.router.events.pipe(
      startWith(null),
      map(() =>
        this.pages.find((page) => {
          if (page.route === '/') {
            return window.location.pathname === page.route;
          }

          return window.location.pathname.startsWith(page.route);
        })
      )
    )
  );

  constructor(
    public responsive: ResponsivenessService,
    private icons: IconsService,
    private router: Router
  ) {}

  toggleSideNav(explicit?: boolean): void {
    this.sideNavOpen.update((open) =>
      typeof explicit === 'boolean' ? explicit : !open
    );
  }

  navigateToPage(page: Page): void {
    if (page === this.activePage()) return;

    this.router.navigate([page.route]);
    this.toggleSideNav(false);
  }
}
