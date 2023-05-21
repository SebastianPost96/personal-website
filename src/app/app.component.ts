import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
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
export class AppComponent implements OnInit {
  public readonly pages: Page[] = [
    { route: '/', title: 'Home' },
    { route: '/projects', title: 'Projects' },
  ];

  sideNavOpen = signal(false);

  activePage = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(({ url }) =>
        this.pages.find((page) => {
          if (page.route === '/') {
            return url === page.route;
          }

          return url.startsWith(page.route);
        })
      )
    )
  );

  constructor(
    public responsive: ResponsivenessService,
    private icons: IconsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.responsive.syncMobileHeaderColor();
  }

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
