import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';

const flyIn = (direction: 'up' | 'left') => {
  const initialTransform = direction === 'up' ? 'translateY(100vh)' : 'translateX(100vw)';
  return [style({ transform: initialTransform }), stagger(35, animate('.25s ease-out'))];
};

export const flyInAnimation = trigger('flyIn', [
  transition('* => *', [
    group([
      query('router-outlet ~ :enter > *, router-outlet ~ :enter .mat-mdc-tab-body-content > * > *', flyIn('left'), {
        optional: true,
      }),
      query(':enter .mat-mdc-tab-body-content', style({ 'overflow-x': 'hidden' }), {
        optional: true,
      }),
    ]),
  ]),
]);
