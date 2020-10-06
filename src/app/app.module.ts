import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingProviders, Routing} from './app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        Routing,
        BrowserModule
    ],
    providers: [AppRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
