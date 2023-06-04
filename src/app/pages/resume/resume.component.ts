import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_INFORMATION } from '../../constants/contact-information';
import { MatButtonModule } from '@angular/material/button';
import { ResponsivenessService } from '../../services/responsiveness.service';

type ResumeFragment =
  | { type: 'title'; content: string }
  | { type: 'paragraph'; content: string }
  | {
      type: 'imageIcon';
      content: string;
      link: string;
      svgIcon?: string;
      fontIcon?: string;
    }
  | {
      type: 'section';
      content: string;
    }
  | {
      type: 'occupation';
      icon: string;
      title: string;
      subtitle: string;
      timeLine: string;
      description: string[];
    };

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, MatIconModule, NgOptimizedImage, MatButtonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  public readonly resumeContent: ResumeFragment[] = [
    { type: 'title', content: 'Sebastian Post' },
    { type: 'paragraph', content: 'Schweinfurt, Bavaria, Germany' },
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
    { type: 'section', content: 'Experience' },
    {
      type: 'occupation',
      icon: 'assets/nerdware.jfif',
      title: 'Frontend Developer',
      subtitle: 'nerdware GmbH',
      timeLine: 'Oct 2022 - Present',
      description: ['Working on multinational HR support system.'],
    },
    {
      type: 'occupation',
      icon: 'assets/aracom.jpg',
      title: 'Frontend Developer',
      subtitle: 'AraCom IT Services AG',
      timeLine: 'Apr 2021 - Sep 2022 (1 year 6 months)',
      description: ['Projects on Enterprise Resource Planning and Internationalization.'],
    },
    {
      type: 'occupation',
      icon: 'assets/ronny.png',
      title: 'IT Administrator (Minijob)',
      subtitle: 'Ronny T-Shirt Druck',
      timeLine: '2015 - 2021 (6 years)',
      description: ['● Onlineshop web development', '● SEO', '● Maintenance of soft- and hardware'],
    },
    { type: 'section', content: 'Education' },
    {
      type: 'occupation',
      icon: 'assets/uni_bamberg.jfif',
      title: 'Otto-Friedrich-Universität Bamberg',
      subtitle: 'Bachelor of Science - BS, Software Systems Science',
      timeLine: 'Oct 2017 - Mar 2021',
      description: [
        "● Bachelor's thesis on a business search engine frontend written in Kotlin-React",
        '● Software projects using mainly Angular and Spring Boot.',
      ],
    },
    { type: 'section', content: 'Skills' },
    {
      type: 'paragraph',
      content: ['Angular', 'Nx', 'TypeScript', 'RxJS', 'SCSS', 'HTML', 'SEO'].join('   •   '),
    },
  ];

  constructor(public responsive: ResponsivenessService) {}

  public downloadCV(): void {
    const link = document.createElement('a');
    link.download = 'Resume-Sebastian-Post.pdf';
    link.href = 'assets/Resume-Sebastian-Post.pdf';
    link.click();
  }
}
