import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BehaviorSubject, combineLatest, map, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-minesweeper',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinesweeperComponent {
  hasData$ = new BehaviorSubject(false);
  minimumLoadTime$ = timer(500);

  hasLoaded$ = combineLatest([this.hasData$, this.minimumLoadTime$]).pipe(
    map(([hasData]) => hasData),
    shareReplay(0)
  );
}
