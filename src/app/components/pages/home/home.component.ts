import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from '../../ui/skill/skill.component';
import { Skill } from '../../../types/skill';
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
        de: 'Effizienter Umgang mit wachsender Software und Funktionalität.',
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
    skills: { de: 'Kenntnisse', en: 'Skills' },
    qualities: { de: 'Qualitäten', en: 'Qualities' },
    welcome: { de: 'Willkommen', en: 'Welcome' },
    intro: {
      de: 'Mein Name ist Sebastian Post und ich bin ein Frontend-Entwickler mit einer Spezialisierung in Angular und reaktiver Programmierung. Aufgrund meiner Erfahrung in der Softwareentwicklung hatte ich die Gelegenheit, an einer Vielzahl von Unternehmensanwendungen, insbesondere ERP- und HRM-Systemen, zu arbeiten. Um Qualitätsstandards zu gewährleisten, lege ich großen Wert darauf, über die neuesten Entwicklungen auf dem Laufenden zu bleiben. Ich lege Wert auf sauberen und eleganten Code und gehe gerne komplexe Herausforderungen an, um intuitive und effiziente Software zu entwickeln.',
      en: "My name is Sebastian Post, and I am a frontend developer specializing in Angular and reactive programming. With a strong background in developing enterprise applications, I've had the opportunity to work on a variety of projects, in particular ERP and HRM systems. To ensure quality and keep up with the rapidly evolving software development landscape, I prioritize staying up-to-date with the latest advancements. I'm a firm believer in clean and elegant code, and I enjoy tackling complex challenges to craft intuitive and efficient software.",
    },
  } satisfies TranslationFile;
}
