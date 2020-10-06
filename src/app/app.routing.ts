import {AppComponent} from './app.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

const appRoutes = [
    { path: '', component: AppComponent }
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
