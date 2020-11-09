import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

export const fader =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], {optional: true}),
            query('footer', [
                style({opacity: 0})
            ], {optional: true}),
            query(':enter', [
                style({opacity: 0})
            ], {optional: true}),
            query(':leave', [
                animate('300ms ease-in-out', style({opacity: 0}))
            ], {optional: true}),
            query(':enter', [
                animate('300ms ease-in-out', style({opacity: 1}))
            ], {optional: true}),
        ])
    ]);
