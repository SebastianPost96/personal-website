import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MinesweeperComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
