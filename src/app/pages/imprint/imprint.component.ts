import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFORMATION } from '../../constants/contact-information';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImprintComponent {
  public readonly mail = CONTACT_INFORMATION.email;
}
