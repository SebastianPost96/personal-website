import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

type Skill = {
  icon: string;
  label: string;
  experience: 1 | 2 | 3 | 4 | 5;
};

type Reference = {
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
  public readonly skills: Record<string, Skill[]> = { Languages: [], Frameworks: [], 'UI Libraries': [] };

  public readonly references: Reference[] = [];
}
