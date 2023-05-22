import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  @HostBinding('style.padding')
  get padding(): string {
    return this.responsive.isMobile() ? '' : '20px 0';
  }

  constructor(public responsive: ResponsivenessService) {}
}
