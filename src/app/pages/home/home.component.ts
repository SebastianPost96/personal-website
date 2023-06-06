import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

export type Skill = {
  icon: string;
  label: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly proficiencies: Record<string, Skill[]> = {
    Languages: [
      { label: 'TypeScript', icon: 'typescript.png' },
      { label: 'JavaScript', icon: 'javascript.webp' },
      { label: 'HTML 5', icon: 'html.png' },
      { label: 'SCSS', icon: 'scss.png' },
      { label: 'C#', icon: 'c_sharp.png' },
    ],
    Frameworks: [
      { label: 'Angular', icon: 'angular.png' },
      { label: 'Nrwl Nx', icon: 'nx.png' },
      { label: 'Ionic', icon: 'ionic.png' },
      { label: 'React', icon: 'react.png' },
      { label: 'NestJS', icon: 'nest.svg' },
    ],
    'UI Libraries': [
      { label: 'Material', icon: 'material.svg' },
      { label: 'PrimeNG', icon: 'primeng.png' },
      { label: 'Bootstrap', icon: 'bootstrap.png' },
      { label: 'Tailwind', icon: 'tailwind.png' },
    ],
    Skills: [
      { label: 'Reactive Programming', icon: 'rxjs.png' },
      { label: 'Unit Testing', icon: 'jest.webp' },
      { label: 'Progressive Web Apps', icon: 'pwa.png' },
      { label: 'DevOps', icon: 'aws.webp' },
      { label: 'Search Engine Optimization', icon: 'seo.png' },
    ],
  };

  public readonly references: Skill[] = [];

  public readonly tools: Skill[] = [
    { label: 'Windows', icon: 'windows.png' },
    { label: 'WebStorm', icon: 'webstorm.png' },
    { label: 'Git', icon: 'git.png' },
    { label: 'Docker', icon: 'docker.png' },
    { label: 'Insomnia', icon: 'insomnia.png' },
  ];
}
