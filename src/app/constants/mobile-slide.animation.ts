import { animate, group, query, style, transition, trigger } from '@angular/animations';

const slide = (direction: 'up' | 'down', selector: 'enter' | 'leave') => {
  const position = selector === 'leave' ? 'fixed' : 'static';
  const initialTransform =
    selector === 'leave' ? 'translateX(0)' : direction === 'up' ? 'translateX(150vw)' : 'translateX(-150vw)';
  const transitionTransform =
    selector === 'enter' ? 'translateX(0)' : direction === 'up' ? 'translateX(-150vw)' : 'translateX(150vw)';

  return [
    style({ transform: initialTransform, position, overflow: 'hidden', height: '100vh' }),
    animate('.3s ease-out', style({ transform: transitionTransform })),
  ];
};

export const mobileSlideAnimation = trigger('mobileSlide', [
  transition(':enter', []),
  transition('* => *', [
    group([
      query(':enter', slide('down', 'enter'), {
        optional: true,
      }),
      query(':leave', slide('down', 'leave'), {
        optional: true,
      }),
    ]),
  ]),
]);
