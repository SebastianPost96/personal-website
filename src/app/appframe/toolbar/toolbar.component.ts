import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ConfigService } from 'src/app/services/config.service';
import { MatButtonModule } from '@angular/material/button';
import { CONTACT_INFORMATION } from 'src/app/constants/contact-information';
import { MatMenuModule } from '@angular/material/menu';
import { Language } from '../../types/language';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Output() toggleSideNav = new EventEmitter<void>();

  public readonly linkedinUrl = 'https://' + CONTACT_INFORMATION.linkedin;

  public readonly buttons: { label: string; iconLight: string; iconDark: string; link: string }[] = [
    { label: 'GitHub', iconLight: 'github-white', iconDark: 'github', link: 'https://' + CONTACT_INFORMATION.github },
    {
      label: 'LinkedIn',
      iconLight: 'linkedin',
      iconDark: 'linkedin',
      link: 'https://' + CONTACT_INFORMATION.linkedin,
    },
  ];

  public readonly languageOptions: { label: string; language: Language }[] = [
    { label: 'Deutsch', language: 'de' },
    { label: 'English', language: 'en' },
  ];

  constructor(public config: ConfigService) {}
}
