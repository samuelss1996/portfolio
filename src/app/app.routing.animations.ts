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
                animate('600ms ease-in-out', style({opacity: 0}))
            ], {optional: true}),
            query(':enter', [
                animate('600ms ease-in-out', style({opacity: 1}))
            ], {optional: true}),
        ])
    ]);

export const extend =
    trigger('extend', [
        state('in', style({opacity: 0})),
        state('out', style({opacity: 1})),
        transition(':enter', [
            style({
                opacity: 1
            }),
            animate('600ms ease-in-out', style({
                opacity: 0
            }))
        ]),
        transition('* => *', [
            animate('600ms ease-in-out')
        ])
    ]);

// export const fader =
//     trigger('routeAnimations', [
//         transition('* <=> *', [
//             query(':enter', [
//                 style({opacity: 0, display: 'block'})
//             ], {optional: true}),
//             query(':leave', [
//                 style({opacity: 1, display: 'block'})
//             ], {optional: true}),
//
//             query(':leave', [
//                 animate('600ms ease-in-out',
//                     style({
//                         opacity: 0,
//                     })
//                 ),
//                 style({display: 'none'})
//             ], {optional: true}),
//             query(':enter', [
//                 style({opacity: 0, display: 'block'}),
//                 animate('600ms ease-in-out',
//                     style({
//                         opacity: 1
//                     })
//                 )
//             ], {optional: true}),
//         ])
//     ]);

// export const fader =
//     trigger('routeAnimations', [
//         transition(':enter', [
//             style({transform: 'translateX(100%)'}),
//             animate('0.3s ease-in-out', style({opacity: 1}))
//         ]),
//         transition(':leave', [
//             style({transform: 'translateX(0%)', position: 'absolute', left: 0, right: 0, top: 0}),
//             animate('0.3s ease-in-out', style({opacity: 0}))
//         ])
//     ]);
