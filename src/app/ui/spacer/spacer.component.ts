import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-spacer',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacerComponent {
  @Input() margin: 1 | 2 | 3 = 1;
}
