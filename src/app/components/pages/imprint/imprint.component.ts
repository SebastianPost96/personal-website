import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFORMATION } from '../../../constants/contact-information';
import { TRANSLATIONS } from '../../../constants/global-translations';
import { TranslationPipe } from '../../../pipes/translation.pipe';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslationPipe],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImprintComponent {
  public readonly mail = CONTACT_INFORMATION.email;

  imprint = TRANSLATIONS.imprint;
}
