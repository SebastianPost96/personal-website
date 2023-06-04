import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';
import { MatButtonModule } from '@angular/material/button';
import { CONTACT_INFORMATION } from 'src/app/constants/contact-information';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatDividerModule, MatButtonModule],
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

  constructor(public responsive: ResponsivenessService) {}
}
