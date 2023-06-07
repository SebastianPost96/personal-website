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
    Frameworks: [
      { label: 'Angular', icon: 'angular.png' },
      { label: 'React', icon: 'react.png' },
      { label: 'Ionic', icon: 'ionic.png' },
      { label: 'NestJS', icon: 'nest.svg' },
    ],
    Languages: [
      { label: 'TypeScript', icon: 'typescript.png' },
      { label: 'JavaScript', icon: 'javascript.webp' },
      { label: 'HTML 5', icon: 'html.png' },
      { label: 'SCSS', icon: 'scss.png' },
    ],
    UI: [
      { label: 'Material', icon: 'material.svg' },
      { label: 'PrimeNG', icon: 'primeng.png' },
      { label: 'Bootstrap', icon: 'bootstrap.png' },
      { label: 'Tailwind', icon: 'tailwind.png' },
    ],
    Technologies: [
      { label: 'RxJS', icon: 'rxjs.png' },
      { label: 'Jest', icon: 'jest.webp' },
      { label: 'Nx', icon: 'nx.png' },
      { label: 'PWA', icon: 'pwa.png' },
    ],

    Tools: [
      { label: 'Windows', icon: 'windows.png' },
      { label: 'WebStorm', icon: 'webstorm.png' },
      { label: 'Git', icon: 'git.png' },
      { label: 'AWS', icon: 'aws.webp' },
    ],
  };

  noSort = () => 0;
}
