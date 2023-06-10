import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from '../../ui/skill/skill.component';
import { Skill } from '../../../types/skill';
import { TRANSLATIONS } from '../../../constants/global-translations';
import { TranslationPipe } from '../../../pipes/translation.pipe';
import { Translation, TranslationFile } from '../../../types/translation';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SpacerComponent } from '../../ui/spacer/spacer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SkillComponent,
    TranslationPipe,
    MatCardModule,
    MatIconModule,
    SpacerComponent,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly qualities: { icon: string; title: Translation; subtext: Translation }[] = [
    {
      icon: 'speed',
      title: { en: 'Fast', de: 'Schnell' },
      subtext: {
        en: 'Fast load times and lag free interaction, even with big data.',
        de: 'Schnelles Laden und ruckelfreie Interaktion, selbst bei großen Datenmengen.',
      },
    },
    {
      icon: 'devices',
      title: { en: 'Responsive', de: 'Responsiv' },
      subtext: {
        en: 'Layouts for desktop, mobile or both together.',
        de: 'Layouts für Desktop, Mobilgeräte oder beide zusammen.',
      },
    },
    {
      icon: 'engineering',
      title: { en: 'Scalable', de: 'Skalierbar' },
      subtext: {
        en: 'Efficient management of growing features and software size.',
        de: 'Effizientesr Umgang mit wachsender Software und Funktionalität.',
      },
    },
  ];

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

  translations = {
    experience: TRANSLATIONS.experience,
    qualities: { de: 'Qualitäten', en: 'Qualities' },
    about: { de: 'Über mich', en: 'About me' },
  } satisfies TranslationFile;
}
