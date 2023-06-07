import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFORMATION } from '../../constants/contact-information';
import { MatIconModule } from '@angular/material/icon';
import { TranslationFile } from '../../types/translation';
import { TranslationPipe } from '../../pipes/translation.pipe';
import { SpacerComponent } from '../../ui/spacer/spacer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslationPipe, SpacerComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  public readonly email = CONTACT_INFORMATION.email;

  translation = {
    contact: { de: 'Kontakt', en: 'Contact Me' },
    paragraph: {
      en: 'Feel free to drop me an email. I check my inbox regularly, so you can expect a prompt response from me.',
      de: 'Schreiben Sie mir gerne eine E-Mail. Ich überprüfe meinen Posteingang regelmäßig, sodass Sie eine schnelle Antwort von mir erwarten können.',
    },
  } satisfies TranslationFile;
}
