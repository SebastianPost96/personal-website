import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfigService } from 'src/app/services/config.service';
import { MatIconModule } from '@angular/material/icon';

interface Page {
  route: string;
  title: string;
  icon?: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, AppRoutingModule, MatCardModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input() sideNavOpen!: boolean;
  @Output() toggleSideNav = new EventEmitter<boolean>();

  public readonly pages: Page[] = [
    { route: '/', title: 'About', icon: 'person' },
    { route: '/resume', title: 'Resume', icon: 'description' },
    { route: '/portfolio', title: 'Code Samples', icon: 'code' },
    { route: '/contact', title: 'Contact', icon: 'mail' },
    { route: '/imprint', title: 'Imprint' },
    { route: '/privacy', title: 'Privacy Notice' },
  ];

  public activePage = toSignal(
    this._router.events.pipe(
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

  constructor(public config: ConfigService, private _router: Router) {}

  public navigateToPage(page: Page): void {
    if (page === this.activePage()) return;

    this._router.navigate([page.route]);
    this.toggleSideNav.emit(false);
  }
}
