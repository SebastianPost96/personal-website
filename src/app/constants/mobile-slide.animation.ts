import { animate, group, query, style, transition, trigger } from '@angular/animations';

const slide = (direction: 'up' | 'down', selector: 'enter' | 'leave') => {
  const position = selector === 'leave' ? 'fixed' : 'static';
  const initialTransform =
    selector === 'leave' ? 'translateY(0)' : direction === 'up' ? 'translateY(150vh)' : 'translateY(-150vh)';
  const transitionTransform =
    selector === 'enter' ? 'translateY(0)' : direction === 'up' ? 'translateY(-150vh)' : 'translateY(150vh)';

  return [
    style({ transform: initialTransform, position, overflow: 'hidden', height: '90%' }),
    animate('0.6s ease-out', style({ transform: transitionTransform })),
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
