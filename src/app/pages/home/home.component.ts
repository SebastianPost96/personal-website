import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

export type Proficiency = {
  icon: string;
  label: string;
  experience: 1 | 2 | 3 | 4 | 5;
};

type Reference = {
  icon: string;
  label: string;
};

type Tool = {
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
  public readonly proficiencies: Record<string, Proficiency[]> = {
    Languages: [
      { label: 'TypeScript', icon: 'typescript.png', experience: 5 },
      { label: 'JavaScript', icon: 'javascript.webp', experience: 5 },
      { label: 'HTML 5', icon: 'html.png', experience: 4 },
      { label: 'SCSS', icon: 'scss.png', experience: 4 },
      { label: 'C#', icon: 'c_sharp.png', experience: 2 },
    ],
    Frameworks: [
      { label: 'Angular', icon: 'angular.png', experience: 5 },
      { label: 'Nrwl Nx', icon: 'nx.png', experience: 4 },
      { label: 'Ionic', icon: 'ionic.png', experience: 3 },
      { label: 'React', icon: 'react.png', experience: 3 },
      { label: 'NestJS', icon: 'nest.svg', experience: 2 },
    ],
    'UI Libraries': [
      { label: 'Material', icon: 'material.svg', experience: 5 },
      { label: 'PrimeNG', icon: 'primeng.png', experience: 4 },
      { label: 'Bootstrap', icon: 'bootstrap.png', experience: 4 },
      { label: 'Tailwind', icon: 'tailwind.png', experience: 3 },
    ],
    Skills: [
      { label: 'Reactive Programming', icon: 'rxjs.png', experience: 5 },
      { label: 'Unit Testing', icon: 'jest.webp', experience: 4 },
      { label: 'Progressive Web Apps', icon: 'pwa.png', experience: 3 },
      { label: 'DevOps', icon: 'aws.webp', experience: 3 },
      { label: 'Search Engine Optimization', icon: 'seo.png', experience: 3 },
    ],
  };

  public readonly references: Reference[] = [];

  public readonly tools: Tool[] = [
    { label: 'WebStorm', icon: '' },
    { label: 'Docker', icon: '' },
    { label: 'GitHub', icon: '' },
    { label: 'Windows', icon: '' },
    { label: 'Insomnia', icon: '' },
  ];
}
