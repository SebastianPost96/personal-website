import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from '../../ui/skill/skill.component';
import { Skill } from '../../types/skill';
import { translations } from '../../constants/global-translations';
import { TranslationPipe } from '../../pipes/translation.pipe';
import { Translation } from '../../types/translation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkillComponent, TranslationPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly proficiencies: { title: Translation | string; skills: Skill[] }[] = [
    {
      title: 'Frameworks',
      skills: [
        { label: 'Angular', icon: 'angular.png' },
        { label: 'React', icon: 'react.png' },
        { label: 'Ionic', icon: 'ionic.png' },
        { label: 'NestJS', icon: 'nest.svg' },
      ],
    },
    {
      title: { en: 'Languages', de: 'Sprachen' },
      skills: [
        { label: 'TypeScript', icon: 'typescript.png' },
        { label: 'JavaScript', icon: 'javascript.webp' },
        { label: 'HTML 5', icon: 'html.png' },
        { label: 'SCSS', icon: 'scss.png' },
      ],
    },
    {
      title: 'UI',
      skills: [
        { label: 'Material', icon: 'material.svg' },
        { label: 'PrimeNG', icon: 'primeng.png' },
        { label: 'Bootstrap', icon: 'bootstrap.png' },
        { label: 'Tailwind', icon: 'tailwind.png' },
      ],
    },
    {
      title: { en: 'Technologies', de: 'Technologien' },
      skills: [
        { label: 'RxJS', icon: 'rxjs.png' },
        { label: 'Jest', icon: 'jest.webp' },
        { label: 'Nx', icon: 'nx.png' },
        { label: 'PWA', icon: 'pwa.png' },
      ],
    },
    {
      title: { en: 'Tools', de: 'Software' },
      skills: [
        { label: 'Windows', icon: 'windows.png' },
        { label: 'WebStorm', icon: 'webstorm.png' },
        { label: 'Git', icon: 'git.png' },
        { label: 'AWS', icon: 'aws.webp' },
      ],
    },
  ];

  translations = translations;
}
