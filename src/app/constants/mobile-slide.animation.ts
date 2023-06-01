import { animate, group, query, style, transition, trigger } from '@angular/animations';

const slide = (direction: 'up' | 'down', selector: 'enter' | 'leave') => {
  const position = selector === 'leave' ? 'fixed' : 'static';
  const initialTransform =
    selector === 'leave' ? 'translateY(0)' : direction === 'up' ? 'translateY(100vh)' : 'translateY(-100vh)';
  const transitionTransform =
    selector === 'enter' ? 'translateY(0)' : direction === 'up' ? 'translateY(-100vh)' : 'translateY(100vh)';

  return [
    style({ transform: initialTransform, position, overflow: 'hidden', height: '90%' }),
    animate('0.5s ease-in-out', style({ transform: transitionTransform })),
  ];
};

export const mobileSlideAnimation = trigger('mobileSlide', [
  transition(':decrement', [
    group([
      query(':enter', slide('down', 'enter'), {
        optional: true,
      }),
      query(':leave', slide('down', 'leave'), {
        optional: true,
      }),
    ]),
  ]),
  transition(':increment', [
    group([
      query(':enter', slide('up', 'enter'), {
        optional: true,
      }),
      query(':leave', slide('up', 'leave'), {
        optional: true,
      }),
    ]),
  ]),
]);
