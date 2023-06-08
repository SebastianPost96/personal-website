import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Skill } from '../../../types/skill';

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
