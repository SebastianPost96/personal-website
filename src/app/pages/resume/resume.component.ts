import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_INFORMATION } from '../../constants/contact-information';
import { MatButtonModule } from '@angular/material/button';
import { ConfigService } from '../../services/config.service';
import { Translation } from '../../types/translation';
import { TRANSLATIONS } from '../../constants/global-translations';
import { TranslationPipe } from '../../pipes/translation.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { SpacerComponent } from '../../ui/spacer/spacer.component';

type ResumeFragment =
  | { type: 'title'; content: string }
  | { type: 'paragraph'; content: Translation }
  | {
      type: 'imageIcon';
      content: string;
      link: string;
      svgIcon?: string;
      fontIcon?: string;
    }
  | {
      type: 'section';
      content: Translation;
    }
  | {
      type: 'occupation';
      icon: string;
      title: Translation | string;
      subtitle: Translation | string;
      timeLine: Translation;
      description: Translation[];
    }
  | { type: 'spacer'; size: 1 | 2 | 3; hide?: true };

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
    MatButtonModule,
    TranslationPipe,
    MatDividerModule,
    SpacerComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  public readonly resumeContent: ResumeFragment[] = [
    { type: 'title', content: 'Sebastian Post' },
    { type: 'paragraph', content: { en: 'Schweinfurt, Bavaria, Germany', de: 'Schweinfurt, Bayern, Deutschland' } },
    {
      type: 'imageIcon',
      content: CONTACT_INFORMATION.email,
      link: 'mailto:' + CONTACT_INFORMATION.email,
      fontIcon: 'mail',
    },
    {
      type: 'imageIcon',
      content: CONTACT_INFORMATION.linkedin,
      link: 'https://' + CONTACT_INFORMATION.linkedin,
      svgIcon: 'linkedin',
    },
    { type: 'spacer', size: 2 },
    { type: 'section', content: TRANSLATIONS.experience },
    {
      type: 'occupation',
      icon: 'assets/nerdware.jfif',
      title: { en: 'Frontend Developer', de: 'Frontend-Entwickler' },
      subtitle: 'nerdware GmbH',
      timeLine: { en: 'Oct 2022 - Present', de: 'Okt 2022 - Heute' },
      description: [
        { de: 'Arbeit an einem multinationalen HR-Support System.', en: 'Working on multinational HR support system.' },
      ],
    },
    { type: 'spacer', size: 1, hide: true },
    {
      type: 'occupation',
      icon: 'assets/aracom.jpg',
      title: { en: 'Frontend Developer', de: 'Frontend-Entwickler' },
      subtitle: 'AraCom IT Services AG',
      timeLine: { en: 'Apr 2021 - Sep 2022 (1 year 6 months)', de: 'Apr 2021 - Sep 2022 (1 Jahr 6 Monate)' },
      description: [
        {
          en: 'Projects on Enterprise Resource Planning and Internationalization.',
          de: 'Projekte zu Enterprise Resource Planning und Internationalisierung.',
        },
      ],
    },
    { type: 'spacer', size: 1, hide: true },
    {
      type: 'occupation',
      icon: 'assets/ronny.png',
      title: 'IT Administrator (Minijob)',
      subtitle: 'Ronny T-Shirt Druck',
      timeLine: { en: '2015 - 2021 (6 years)', de: '2015 - 2021 (6 Jahre)' },
      description: [
        { en: '● Onlineshop web development', de: '● Onlineshop Webentwicklung' },
        { en: '● SEO', de: '● SEO' },
        { en: '● Maintenance of soft- and hardware', de: '● Wartung von Soft- und Hardware' },
      ],
    },
    { type: 'spacer', size: 2 },
    { type: 'section', content: { de: 'Ausbildung', en: 'Education' } },
    {
      type: 'occupation',
      icon: 'assets/uni_bamberg.jfif',
      title: { de: 'Otto-Friedrich-Universität Bamberg', en: 'University of Bamberg' },
      subtitle: 'Bachelor of Science - BS, Software Systems Science',
      timeLine: { en: 'Oct 2017 - Mar 2021', de: 'Okt 2017 - Mär 2021' },
      description: [
        {
          en: "● Bachelor's thesis on a business search engine frontend written in Kotlin-React",
          de: '● Bachelorarbeit über ein Firmensuchmaschinen-Frontend, geschrieben in Kotlin-React',
        },
        {
          en: '● Software projects using mainly Angular and Spring Boot.',
          de: '● Softwareprojekte mit größtenteils Angular and Spring Boot.',
        },
      ],
    },
  ];

  constructor(public config: ConfigService) {}

  public downloadCV(): void {
    const link = document.createElement('a');
    link.download = 'Resume-Sebastian-Post.pdf';
    link.href = 'assets/Resume-Sebastian-Post.pdf';
    link.click();
  }
}
