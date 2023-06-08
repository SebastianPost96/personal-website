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
import { Translation } from '../../../types/translation';
import { TranslationPipe } from '../../../pipes/translation.pipe';
import { TRANSLATIONS } from '../../../constants/global-translations';

interface Page {
  route: string;
  title: Translation;
  icon?: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    TranslationPipe,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input() sideNavOpen!: boolean;
  @Output() toggleSideNav = new EventEmitter<boolean>();

  public readonly pages: Page[] = [
    { route: '/', title: { en: 'About', de: 'Info' }, icon: 'person' },
    { route: '/resume', title: { en: 'Resume', de: 'Lebenslauf' }, icon: 'description' },
    { route: '/portfolio', title: { en: 'Code Samples', de: 'Codebeispiele' }, icon: 'code' },
    { route: '/contact', title: { en: 'Contact', de: 'Kontakt' }, icon: 'mail' },
    { route: '/imprint', title: TRANSLATIONS.imprint },
    { route: '/privacy', title: { en: 'Privacy Notice', de: 'Datenschutz' } },
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
