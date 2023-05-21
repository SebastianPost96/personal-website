import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponsivenessService } from './services/responsiveness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(public responsive: ResponsivenessService) {}

  sideNavOpen = false;
}
