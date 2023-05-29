import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { Page } from 'src/app/types/page';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, AppRoutingModule, MatCardModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input() sideNavOpen!: boolean;
  @Output() toggleSideNav = new EventEmitter<boolean>();

  public readonly pages: Page[] = [
    { route: '/', title: 'About' },
    { route: '/cv', title: 'CV' },
    { route: '/projects', title: 'Portfolio' },
    { route: '/contact', title: 'Contact' },

    { route: '/imprint', title: 'Imprint' },
    { route: '/privacy', title: 'Privacy Notice' },
  ];

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

  constructor(public responsive: ResponsivenessService, private router: Router) {}

  navigateToPage(page: Page): void {
    if (page === this.activePage()) return;

    this.router.navigate([page.route]);
    this.toggleSideNav.emit(false);
  }
}
