import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '64px'
    })
  ),
  state('open',
    style({
      'min-width': '220px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onPreUse = trigger('onPreUse', [
  state('very-close',
    style({
      'margin-left': '0px'
    })
  ),
  state('closed',
    style({
      'margin-left': '64px'
    })
  ),
  transition('very-close => closed', animate('250ms ease-in')),
  transition('closed => very-close', animate('250ms ease-in')),
]);

export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '64px'
    })
  ),
  state('open',
    style({
      'margin-left': '220px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'inline-block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);