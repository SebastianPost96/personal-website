import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const flyIn = (direction: 'up' | 'left') => {
  const initialTransform = direction === 'up' ? 'translateY(100vh)' : 'translateX(100vw)';

  return [style({ transform: initialTransform }), stagger(35, animate('.25s ease-out'))];
};

export const mobileSlideAnimation = trigger('mobileSlide', [
  transition('* => *', [
    query(':enter > *', flyIn('left'), {
      optional: true,
    }),
  ]),
]);
