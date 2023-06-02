import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const slide = (direction: 'left' | 'right') => {
  const initialTransform = direction === 'left' ? 'translateX(100vw)' : 'translateX(-100vw)';
  const transitionTransform = 'translateX(0)';

  return [
    style({ transform: initialTransform }),
    stagger(50, animate('.3s ease-out', style({ transform: transitionTransform }))),
  ];
};

export const mobileSlideAnimation = trigger('mobileSlide', [
  transition('* => *', [
    query(':enter > *', slide('left'), {
      optional: true,
    }),
  ]),
]);
