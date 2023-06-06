import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Skill } from '../home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatIconModule, MatCardModule, MatTooltipModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input({ required: true }) skill!: Skill;
}
