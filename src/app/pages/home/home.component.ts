import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

type Proficiency = {
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
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly proficiencies: Record<string, Proficiency[]> = {
    Languages: [
      { label: 'TypeScript', icon: '', experience: 5 },
      { label: 'JavaScript', icon: '', experience: 5 },
      { label: 'HTML', icon: '', experience: 4 },
      { label: 'SCSS', icon: '', experience: 3 },
      { label: 'C#', icon: '', experience: 2 },
    ],
    Frameworks: [
      { label: 'Angular', icon: '', experience: 5 },
      { label: 'Nx', icon: '', experience: 3 },
      { label: 'Ionic', icon: '', experience: 2 },
      { label: 'React', icon: '', experience: 2 },
      { label: 'NestJS', icon: '', experience: 2 },
    ],
    'UI Libraries': [
      { label: 'Material', icon: '', experience: 4 },
      { label: 'PrimeNG', icon: '', experience: 4 },
      { label: 'Bootstrap', icon: '', experience: 3 },
      { label: 'Tailwind', icon: '', experience: 2 },
    ],
    Skills: [
      { label: 'Reactive Programming', icon: '', experience: 5 },
      { label: 'Unit Testing', icon: '', experience: 3 },
      { label: 'Progressive Web Apps', icon: '', experience: 3 },
      { label: 'DevOps', icon: '', experience: 3 },
      { label: 'SEO', icon: '', experience: 2 },
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
